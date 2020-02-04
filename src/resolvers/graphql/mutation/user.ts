import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import {validateEmail, forgetEmail} from '../../../services/mailgun';
import configs from '../../../configs';
import {Role, User} from '../../../generated/prisma-client';

export async function signup(parent, {email, password, data}, {prisma}) {
    const roles: [Role] = await prisma.roles({where: {type: configs.app?.auth?.defaultRole}});
    const defaultRole: Role = roles[0];
    const encryptedPassword: string = await bcrypt.hash(password, 10);

    const user: User = await prisma.createUser({
        email,
        password: encryptedPassword,
        ...data,
        role: {
            connect: {
                id: defaultRole?.id
            }
        }
    });

    const token: string = jwt.sign({ userId: user.id }, configs.app?.auth?.secret);

    try {
        const url = `${configs.email?.approveEmailUrl}?token=${token}`;
        await validateEmail(email, url);
    } catch (err) {
        console.log(err);
    }

    return {
        token,
        user,
    }
}

export async function login(parent, {email, password}, {prisma}) {
    const user: User = await prisma.user({ email });

    if (!user) {
        throw new Error('No such user found');
    }

    const valid: boolean = await bcrypt.compare(password, user.password);

    if (!valid) {
        throw new Error('Invalid password');
    }

    const token: string = jwt.sign({ userId: user.id }, configs.app?.auth?.secret);

    return {
        token,
        user,
    }
}

export async function updateMyUser(parent, {data}, {prisma, user}) {
    return prisma.updateUser({
        where: {
            id: user.id,
        },
        data,
    });
}


export async function approveUserEmail(parent, {token}, {prisma, user}) {
    const { userId } = jwt.verify(token, configs.app?.auth?.secret);
    await prisma.updateUser({where: {id: userId}, data: {emailApproved: true}});

    if (user) {
        user.emailApproved = true;
    }

    return {
        success: true,
        message: 'User email has been approved successfully',
    };
}

export async function forgetUserEmail(parent, {email}, {prisma}) {
    const user: User = await prisma.user({ email });

    if (!user) {
        throw new Error('No such user found');
    }

    const token: string = jwt.sign({ userId: user.id }, configs.app?.auth?.secret);
    const url = `${configs.email?.forgetEmailUrl}?token=${token}`;
    const response = await forgetEmail(email, url);

    return {
        success: true,
        message: 'Email has been sent successfully',
        details: response.message,
    };
}

export async function changeUserPassword(parent, {token, password}, {prisma}) {
    const { userId } = jwt.verify(token, configs.app?.auth?.secret);
    const encryptedPassword: string = await bcrypt.hash(password, 10);
    await prisma.updateUser({where: {id: userId}, data: {password: encryptedPassword}});

    return {
        success: true,
        message: 'User email has been approved successfully',
    };
}

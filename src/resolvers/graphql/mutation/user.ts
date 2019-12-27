import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

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
        data
    });
}

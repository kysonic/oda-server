import {parallel} from '../../../services/generators';

export async function users(parent, {where, first, skip, orderBy}, {prisma}) {
    where && parallel(where, ['name', 'email']);
    return prisma.users({where, first, skip, orderBy});
}

export async function user(parent, {where}, {prisma}) {
    return prisma.user(where);
}

export async function myUser(parent, {where}, context) {
    return context.user;
}

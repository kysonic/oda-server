import {parallel} from '../../../utils/generators';

export async function users(parent, {where, first, skip, orderBy}, {prisma}) {
    where && parallel(where, ['name', 'email']);
    return prisma.users({where, first, skip, orderBy});
}

export async function user(parent, {where}, context) {
    return context.user;
}

import {parallel} from '../../../utils/generators';

export async function users(parent, {where, first, skip, orderBy}, {prisma}) {
    where && parallel(where, ['name', 'email']);
    return prisma.users({where, first, skip, orderBy});
}

export async function user(parent, {where}, {prisma}) {
    return prisma.user(where);
}

export async function pages(parent, {where, first, skip, orderBy}, {prisma}) {
    where && parallel(where, ['title', 'description']);
    return prisma.pages({where, first, skip, orderBy});
}

export async function page(parent, {where}, {prisma}) {
    return prisma.user(where);
}

export async function navigations(parent, {where, first, skip, orderBy}, {prisma}) {
    return prisma.navigations({where, first, skip, orderBy});
}

export async function navigation(parent, {where}, {prisma}) {
    return prisma.navigation(where);
}

export async function content({id}, args, {prisma}) {
    return prisma.page({id}).content();
}

export async function navigations({id}, args, {prisma}) {
    return prisma.page({id}).navigations();
}

export async function configs(parent, args, {prisma}) {
    return prisma.module({id: parent.id}).configs();
}

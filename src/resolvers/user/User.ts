export async function role(parent, args, {prisma}) {
    return prisma.user({id: parent.id}).role();
}

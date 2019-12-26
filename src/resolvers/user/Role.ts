export async function privileges(parent, args, {prisma}) {
    return prisma.role({id: parent.id}).privileges();
}

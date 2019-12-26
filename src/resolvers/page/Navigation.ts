export async function items(parent, args, {prisma}) {
    return prisma.navigation({id: parent.id}).items();
}

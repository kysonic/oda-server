export async function items(parent, args, {prisma}) {
    return prisma.navigationItem({id: parent.id}).items();
}

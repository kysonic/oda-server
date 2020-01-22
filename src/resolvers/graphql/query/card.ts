export async function cards(parent, {where, first, skip, orderBy}, {prisma}) {
    return prisma.cards({where, first, skip, orderBy});
}

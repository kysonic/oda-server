export async function json(parent, args, {prisma}) {
    return JSON.stringify(parent.json);
}

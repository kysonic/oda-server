import * as jwt from 'jsonwebtoken';
import configs from '../configs';

export async function getUser(resolve, root, args, context, info) {
    const Authorization: string = context.request.get('Authorization');

    if (Authorization) {
        const token: string = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, configs.app?.auth?.secret);
        const fragment = `
            fragment UserWithRole on User {
              id
              name
              email
              createdAt
              updatedAt
              role {
                id
                name
                type
                description
              }
            }
        `;
        context.user = await context.prisma.user({id: userId}).$fragment(fragment);
    } else {
        context.user = null;
    }

    return resolve(root, args, context, info);
}

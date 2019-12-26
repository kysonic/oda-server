import {GraphQLServer} from 'graphql-yoga';
import {prisma} from './generated/prisma-client';
import resolvers from './resolvers';
import {getUser} from './middlewares/auth';
import {getShield} from './services/auth';

(async () => {
    const shield = await getShield(prisma);

    const server = new GraphQLServer({
        typeDefs: './src/schema.graphql',
        resolvers,
        context: request => (
            {
                ...request,
                prisma,
            }
        ),
        middlewares: [
            getUser,
            shield
        ]
    });

    server.start(() => console.log('Server is running on http://localhost:4000'));
})();

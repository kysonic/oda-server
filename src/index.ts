import {GraphQLServer} from 'graphql-yoga';
import {prisma} from './generated/prisma-client';
import resolvers from './resolvers';
import {getUser} from './middlewares/auth';
import {validation} from './middlewares/validation';
import {getShield} from './services/auth';
import {renderEmailTemplate} from './email';

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
            shield,
            validation
        ]
    });

    server.start(() => console.log('Server is running on http://localhost:4000'));

    server.express.use('/renderEmailTemplate', async (req, res, next) => {
        const html = await renderEmailTemplate(req.query.tplName || 'approve-email', req.query);
        res.end(html);
    });
})();

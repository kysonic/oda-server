import {GraphQLServer} from 'graphql-yoga';
import * as express from 'express';
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

    server.start({
        cors: {
            credentials: true,
            origin: ["http://localhost:3000"]
        }
    }, () => console.log('Server is running on http://localhost:4000'));
    // Serve static files
    server.express.use(express.static('public'));
    // Preview email
    server.express.use('/render-email-template', async (req, res, next) => {
        const html = await renderEmailTemplate(req.query?.tplName || 'approve-email', req.query, true);

        res.end(html);
    });
})();

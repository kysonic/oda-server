import {GraphQLServer} from 'graphql-yoga';
import {prisma} from './generated/prisma-client';
import resolvers from './resolvers';
import {getUser} from './services/auth';

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
    ]
});

server.start(() => console.log('Server is running on http://localhost:4000'));

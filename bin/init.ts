import request from 'graphql-request';
import * as fixtures from '../prisma/fixtures/roles.query';

try {
    (async () => {
        console.log('Applying fixtures to db...');

        for await (const query of fixtures) {
            const res = await request('http://localhost:4466', query);
            console.log(res);
        }

        console.log('Everything is ok, bye');
        process.exit(0);
    })();
} catch (err) {
    console.error('err', err);
    process.exit(1);
}

# ODA Server

It's a base of all ODA.CMS infrastructure. All are starting with data. This data is only one source of
truth for any ODA.CMS services including web, mobile, VR, ML, and other services. All client servers would be forked
from this repository. Client servers could be customized as it is required. All common functionality developed alongside
client-server could be merged to the main repository if appropriate decision by the development team would be applicable.

## Prisma configuration

All Prisma (Data Access Layer) configurations are contained in `docker-compose.yml` file. By default we use PostgreSQL
database as more powerful tool, but configuration could be changed per client's request. Before change database type
be sure that some databases as MongoDB have restrictions, e.g. 

- MongoDB connector doesn't support OR clause. 
- MySQL | Postgres connector doesn't support INLINE relation

Name convention: 

To work with a few servers simultaneously, please adjust following `docker-compose` configurations:

- container_name: oda_server_prisma_<client_name> | oda_server_db_postgres_<client_name>
- adjust ports if you don't want to run containers simultaneously

Docs: https://www.prisma.io/docs/prisma-server/

## Before start

1. Run following commands: 
````
yarn install
docker-compose up -d 
prisma deploy
````

2. Run `npx ts-node bin/init.ts` to set up prisma fixtures <br />
  **OR** Go to `./prisma/fixtures` and run all fixtures in prisma server's graphql playground (http://localhost:4466) 

3. Go to `./src/configs` and copy local.default.ts file as local.ts. Adjust local environment configurations.

## Run server in dev mode

````
yarn dev
````

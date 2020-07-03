import dotenv from 'dotenv';

import startServer from './startServer';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

dotenv.config()

startServer({typeDefs, resolvers});
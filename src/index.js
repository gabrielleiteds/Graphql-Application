require('dotenv').config()
import startServer from './apollo/startServer';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

import('./database/connection')

startServer({ typeDefs, resolvers }); 
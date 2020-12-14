import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

// import of automatic form files with .gql extension
const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const resolvers = mergeResolvers(resolversArray)

export default resolvers; 
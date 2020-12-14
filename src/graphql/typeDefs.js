import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

// import of automatic form files with .gql extension
const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypes(typesArray)

export default typeDefs; 
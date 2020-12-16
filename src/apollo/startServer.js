import { ApolloServer, PubSub } from 'apollo-server';

function startServer({ typeDefs, resolvers }) {
  const pubSub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { pubSub } });

  server.listen().then(({ url }) => {
    console.log(`Server started at ${url}`)
  })
}

export default startServer;
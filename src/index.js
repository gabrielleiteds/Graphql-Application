import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`

const authors = [
  {
    name: 'Kate Chopin',
    books: ['The Awakening']
  },
  {
    name: 'Paul Auster',
    books: ['City of Glass']
  }
];

const books = [
  {
    title: 'The Awakening',
    author: authors[0],
  },
  {
    title: 'City of Glass',
    author: authors[1],
  },
];

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
};

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This type defines the queryable fields for table in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    books: [Book]
  }

  # The "Mutation" type is special: it provide available query for working with database
  # clients can execute, along with the return type for each.
  input BookInput {
    title: String,
    author: String
  }

  type Mutation {
    addBook(title: String, author: String): [Book]
  }
`;
export default typeDefs;
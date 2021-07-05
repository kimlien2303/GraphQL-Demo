import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../schema/typeDefs';
import resolvers from '../schema/resolvers';
const apolloServer = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    playground: true,
    introspection: true
});
export default apolloServer;
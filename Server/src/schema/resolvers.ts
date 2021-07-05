import { books } from "../mockData/books";

// Resolvers define the technique for working with the types defined in the schema.
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (parent: any, args: any, context: any, info: any) => {
      console.log(args)
      const book: any = {
        title: args.title,
        author: args.author
      }
      books.push(book);
      return books;
    },
  },
};

export default resolvers;
import { books } from "../mockData/books";
import { countryList } from "../mockData/country";
import { avatarDb } from "../mockData/avatar";
import {scenes} from "../mockData/scenes";



// Resolvers define the technique for working with the types defined in the schema.
const resolvers = {
  Query: {
    books: () => books,
    countryList: () => countryList,
    avatarDb: () => avatarDb,
    scenes: () => scenes,
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
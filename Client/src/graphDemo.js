/* eslint-disable react/button-has-type */
import React from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
export default function Authors() {
  // eslint-disable-next-line no-shadow
  const BOOKS = gql`
    query GetBooks {
      books {
        title
        author
      }
    }
  `;
  const { loading, error, data } = useQuery(BOOKS, {
    pollInterval: 5000,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div>
      {data.books.map(({ title, author }) => (
        <div key={title}>
          <p>
            Title: {title}, Author: {author}
          </p>
        </div>
      ))}
      <DelayedQuery />
      <Mutation />
    </div>
  );
}

function DelayedQuery() {
  const AUTHORS = gql`
    query getAuthors {
      books {
        author
      }
    }
  `;
  const [getAuthors, { loading, data }] = useLazyQuery(AUTHORS);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {data !== undefined &&
        data.books.map(({ author, title }) => (
          <div key={author}>
            <p>Manual loading</p>
            <p>
              Title: {title}, Author: {author}
            </p>
          </div>
        ))}
      <button onClick={() => getAuthors()}>Click me!</button>
    </div>
  );
}

function Mutation() {
  const ADD_BOOK = gql`
    mutation AddBook($title: String!, $author: String!) {
      addBook(title: $title, author: $author) {
        title
        author
      }
    }
  `;
  const [addBook] = useMutation(ADD_BOOK);

  return (
    <button
      onClick={() => {
        addBook({
          variables: {
            title: Math.random().toString(36).substring(7),
            author: Math.random().toString(36).substring(7),
          },
        });
      }}
    >
      Add Book
    </button>
  );
}

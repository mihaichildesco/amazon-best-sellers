import Book from "./Book";
import { books } from "../data/books";

export const BookList = () => {
  const getBook = (id: number) => {
    const book = books.find((book) => book.id === id);
    return console.log(book);
  };

  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          const { imageSrc, title, author, id } = book;
          return (
            <Book
              imageSrc={imageSrc}
              title={title}
              author={author}
              getBook={getBook}
              key={book.id}
              id={id}
            />
          );
        })}
      </section>
    </>
  );
};

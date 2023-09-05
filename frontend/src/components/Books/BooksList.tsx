// books component
import BookCard from "./BookCard";

type Props = {
  books: Book[];
};

export default function BooksList({ books }: Props) {
  return (
    <>
      {books.map((b: Book) => (
        <BookCard key={b.id} {...b} />
      ))}
    </>
  );
}

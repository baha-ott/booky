import { useSelector } from "react-redux";
import { selectSearch } from "../../features/searchSlice";
import { useGetBooksBySearchQuery } from "../../api/apiSlice";
import Container from "../../components/Container";
import HeadingSecondary from "../../components/HeadingSecondary";
import HomeHero from "../home/component/HomeHero";
import BooksSection from "../../components/Books/BooksSection";

type Props = {};

export default function FavoritesPage({}: Props) {
  const search = useSelector(selectSearch);

  const {
    data: books,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBooksBySearchQuery(search);
  // if the search is empty string the response will be all books
  // started from page 1

  let content;

  if (isLoading) {
    content = <h1>Loading ....</h1>;
  } else if (isSuccess) {
    content = (
      <>
        {books?.length > 0 && <HomeHero books={books.slice(0, 2)} />}
        {books?.length > 0 && (
          <BooksSection books={books.filter((book: Book) => book.favorite)} />
        )}
        {books.length === 0 && <p>nothing found</p>}
      </>
    );
  } else if (isError) {
    content = <h1>{error as string}</h1>;
  }

  return (
    <section>
      <Container>
        <HeadingSecondary title="Your favorite books" />
        {content}
      </Container>
    </section>
  );
}

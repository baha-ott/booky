// components
import Container from "../../components/Container";
import HeadingSecondary from "../../components/HeadingSecondary";

//home components
import HomeHero from "./component/HomeHero";
import BooksSection from "../../components/Books/BooksSection";
import { useGetBooksBySearchQuery } from "../../api/apiSlice";

// redux toolkit
import { useSelector } from "react-redux";
import { selectSearch } from "../../features/searchSlice";

export default function HomePage({}) {
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
        {books?.length > 0 && <BooksSection books={books} />}
        {books.length === 0 && <p>nothing found</p>}
      </>
    );
  } else if (isError) {
    content = <h1>{error as string}</h1>;
  }
  return (
    <section>
      <Container>
        <HeadingSecondary title="Checkout our latest books 🔥" />
        {content}
      </Container>
    </section>
  );
}

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
  } = useGetBooksBySearchQuery(search);
  // if the search is empty string the response will be all books
  // started from page 1

  let booksRender;

  if (isLoading) {
    booksRender = <h1>Loading ....</h1>;
  } else if (isSuccess) {
    booksRender = (
      <>
        {books?.length > 0 && <HomeHero books={books.slice(0, 2)} />}
        {books?.length > 0 && <BooksSection books={books} />}
        {books.length === 0 && <p>nothing found</p>}
      </>
    );
  } else if (isError) {
    throw new Error("An error occured while fetching data for the home page");
  }
  return (
    <section>
      <Container>
        <HeadingSecondary title="Checkout our latest books 🔥" />
        {booksRender}
      </Container>
    </section>
  );
}

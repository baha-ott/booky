import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Tags from "../../components/Books/Tags";
import { Link } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../api/apiSlice";
import Container from "../../components/Container";

type Props = {};

function BookPage({}: Props) {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const {
    data: book,
    isLoading,
    isSuccess,
    isError,
  } = useGetSingleBookQuery(bookId);
  const [deleteBook] = useDeleteBookMutation();

  let renderBook;
  if (isLoading) {
    renderBook = <Loading />;
  } else if (isSuccess) {
    renderBook = (
      <Container>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <img src={book.thumbnail} alt={book.description} />

          <div aria-label="description">
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="leading-relaxed mb-4">{book.description}</p>
            <Tags tags={book.tags} />

            <div aria-label="edit and delete buttons" className="flex gap-8">
              <Link to={`/edit/${book.id}`}>Edit</Link>
              <button
                onClick={() => {
                  deleteBook(book.id);
                  navigate("/");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  } else if (isError) {
    throw new Error(`Failed to get the book of ${book.id} id`);
  }
  return <>{renderBook}</>;
}

export default BookPage;

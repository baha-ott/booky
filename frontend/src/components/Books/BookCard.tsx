// react router
import { Link } from "react-router-dom";

// card components
import Tags from "./Tags";
import BookDescription from "./BookDescription";
import AddtoFavouriteButton from "./AddtoFavouriteButton";

// api
import { useUpdateBookMutation } from "../../api/apiSlice";

export default function BookCard({
  id,
  title,
  description,
  publisher,
  thumbnail,
  tags,
  favorite,
}: Book) {
  const [updateBook] = useUpdateBookMutation();

  const handleClick = () => {
    updateBook({
      id,
      title,
      description,
      publisher,
      thumbnail,
      tags,
      favorite: !favorite,
    });
  };
  // toggling the favorite

  return (
    <div className="relative">
      <Link to={`/${id}`} key={id}>
        <div className="max-w-xs">
          <img src={thumbnail} alt={description} className="rounded-md" />

          <div className="px-2">
            <Tags tags={tags as string[]} />
            <div className="flex justify-between">
              <BookDescription publisher={publisher} title={title} />
            </div>
          </div>
        </div>
      </Link>
      <AddtoFavouriteButton
        favorite={favorite}
        handleAddToFavorite={handleClick}
        className="absolute bottom-2 right-1"
      />
    </div>
  );
}

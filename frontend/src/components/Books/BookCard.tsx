import { Link } from "react-router-dom";

// card components
import Tags from "./Tags";
import BookDescription from "./BookDescription";
import AddtoFavouriteButton from "./AddtoFavouriteButton";

export default function BookCard({
  id,
  title,
  description,
  publisher,
  thumbnail,
  tags,
  favorite,
}: Book) {
  return (
    <Link to={`/${id}`} key={id}>
      <div className="max-w-xs">
        <img src={thumbnail} alt={description} className="rounded-md" />

        <div className="px-2">
          <Tags tags={tags} />
          <div className="flex justify-between">
            <BookDescription publisher={publisher} title={title} />

            <AddtoFavouriteButton favorite={favorite} id={id} />
          </div>
        </div>
      </div>
    </Link>
  );
}

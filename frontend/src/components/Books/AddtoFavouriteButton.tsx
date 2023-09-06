// react-icons
import { MdFavoriteBorder } from "react-icons/md";

// custom hooks
import useToggle from "../../hooks/useToggle";

type Props = {
  favorite: boolean;
  handleAddToFavorite: () => void;
  className: string;
};

export default function AddtoFavouriteButton({
  favorite,
  handleAddToFavorite,
  className,
}: Props) {
  // we will use id to add an item to favourite
  const [isFavorite, toggleIsFavorite] = useToggle(favorite);

  const handleClick = () => {
    handleAddToFavorite();
    toggleIsFavorite(!isFavorite);
  };
  return (
    <button onClick={handleClick} className={className}>
      {isFavorite ? (
        <MdFavoriteBorder className="text-red-500" />
      ) : (
        <MdFavoriteBorder />
      )}
    </button>
  );
}

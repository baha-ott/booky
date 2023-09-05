import { GrFavorite } from "react-icons/gr";

type Props = {
    favorite: boolean;
  id?: number;
};

export default function AddtoFavouriteButton({ favorite, id }: Props) {
  // we will use id to add an item to favourite
  return (
    <button>
      {!favorite ? (
        <GrFavorite />
      ) : (
        <GrFavorite className="bg-yellow-300" fill="yellow" />
      )}
    </button>
  );
}

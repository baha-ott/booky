// icons
import { MdFavoriteBorder } from "react-icons/md";

// react router
import { NavLink } from "react-router-dom";
import { useGetBooksBySearchQuery } from "../../api/apiSlice";
import Loading from "../Loading";

type Props = {};

function FavoriteBtn({}: Props) {
  const { data: favorite, isLoading, isSuccess } = useGetBooksBySearchQuery("");
  let favoriteCounter;
  if (isSuccess) {
    favoriteCounter = favorite.filter((b: Book) => b.favorite).length;
  }

  return (
    <div className="flex items-center justify-end sm:w-full">
      {isLoading && <Loading />}
      {isSuccess && favoriteCounter}
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `text-2xl ${isActive ? "text-yellow-300" : ""}`
        }
      >
        <MdFavoriteBorder />
      </NavLink>
    </div>
  );
}

export default FavoriteBtn;

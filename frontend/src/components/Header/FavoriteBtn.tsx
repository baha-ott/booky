// icons
import { MdFavoriteBorder } from "react-icons/md";

// react router
import { NavLink } from "react-router-dom";

type Props = {};

function FavoriteBtn({}: Props) {
  return (
    <div className="flex items-center justify-end sm:w-full">
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

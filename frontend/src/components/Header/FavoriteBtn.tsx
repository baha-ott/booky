// icons
import { GrFavorite } from "react-icons/gr";

// react router
import { NavLink } from "react-router-dom";

type Props = {};

function FavoriteBtn({}: Props) {
  return (
    <div className="flex items-center justify-end sm:w-full">
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `text-2xl ${isActive ? "bg-yellow-300" : ""}`
        }
      >
        <GrFavorite />
      </NavLink>
    </div>
  );
}

export default FavoriteBtn;

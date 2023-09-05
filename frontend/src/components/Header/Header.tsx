// header compoents
import Search from "./Search";
import FavoriteBtn from "./FavoriteBtn";

export default function Header({}) {
  return (
    <header className="flex justify-between items-center max-w-screen-2xl md:px-8 mx-auto lg:px-0 ">
      {/* search bar */}
      <Search />
      {/* favourrit button */}
      <FavoriteBtn />
    </header>
  );
}

//icons
import { AiOutlineHome } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

// nav components
import NavItem from "./NavItem";
type Props = {};

export default function NavItems({}: Props) {
  const navItems = [
    {
      to: "/",
      title: "Home",
      icon: AiOutlineHome,
    },
    {
      to: "/add-book",
      title: "Add new book",
      icon: AiOutlineAppstoreAdd,
    },
    {
      to: "/favorites",
      title: "favorites",
      icon: GrFavorite,
    },
  ];

  return (
    <>
      <ul className="flex flex-col gap-8 lg:w-full lg:mt-16 lg:gap-4 bg-white z-10">
        {navItems.map(({ to, title, icon: Icon }) => (
          <NavItem key={title} to={to} title={title} icon={Icon} />
        ))}
      </ul>
    </>
  );
}

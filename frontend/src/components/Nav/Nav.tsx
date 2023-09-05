// custom hooks
import useToggle from "../..//hooks/useToggle";

// Nav components
import MobileBtn from "./MobileBtn";
import Logo from "./Logo";
import NavItems from "./NavItems";

export default function MainNavigation({}) {
  const [isNavOpen, toggleIsNavOpen] = useToggle(false);

  const handleBtnMobileClick = () => toggleIsNavOpen(!isNavOpen);

  return (
    <>
      {/* this button will be hidden on desktop */}
      <MobileBtn isNavOpen={isNavOpen} onClick={handleBtnMobileClick} />

      <nav
        className={`py-4 h-screen w-60 lg:w-80 absolute top-0 transition-all ${
          isNavOpen ? "left-0" : "-left-full"
        } z-10 px-4 flex flex-col gap-8 lg:static lg:px-4 bg-white`}
        aria-label="Navigation menu"
      >
        <div className="flex items-center gap-2 justify-between sm:gap-4 text-xl">
          <Logo />
          <MobileBtn isNavOpen={isNavOpen} onClick={handleBtnMobileClick} />
        </div>
        <NavItems />
      </nav>

      {/* overlay need to be fixed with react portals */}
      {isNavOpen && (
        <div className="absolute top-0 left-0 h-full w-full bg-slate-950/10 backdrop-blur-md z-0"></div>
      )}
    </>
  );
}

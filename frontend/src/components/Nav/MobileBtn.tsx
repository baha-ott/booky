// icons
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  isNavOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MobileBtn({ isNavOpen, onClick }: Props) {
  const button = !isNavOpen ? (
    <button
      className="absolute py-4 lg:hidden"
      onClick={onClick}
      aria-label="Mobile menu button"
    >
      <AiOutlineMenu className="text-xl" />
    </button>
  ) : (
    <button className="lg:hidden" onClick={onClick}>
      <AiOutlineClose className="text-xl" />
    </button>
  );

  return <>{button}</>;
}

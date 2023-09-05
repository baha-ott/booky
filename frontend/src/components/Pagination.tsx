import { DOTS, usePagination } from "../hooks/usePagination";

// icons
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

type Props = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
};

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })!;

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === paginationRange[paginationRange.length - 1]) return;

    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  return (
    <ul className="flex items-center justify-center gap-4">
      <li
        onClick={onPrevious}
        className="cursor-pointer text-red-50 fill-white stroke-slate-50"
      >
        <GrPrevious color="white" />
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li className="text-gray-500" key={i}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={i}
            onClick={() => onPageChange(pageNumber as number)}
            className={`${
              currentPage === pageNumber ? "bg-[#ffec99]" : ""
            } px-2 rounded-md cursor-pointer`}
          >
            {pageNumber}
          </li>
        );
      })}
      <li onClick={onNext} className="cursor-pointer">
        <GrNext />
      </li>
    </ul>
  );
};

export default Pagination;

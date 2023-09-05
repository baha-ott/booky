// react hooks
import { useMemo, useState } from "react";

// pagination
import Pagination from "../Pagination";

// books components and layouts
import BooksLayout from "../../layouts/BooksLayout";
import BooksList from "./BooksList";
import BooksMainLayout from "../../layouts/BooksMainLayout";

let PageSize = 10;
// to control how many items will be shown on each page

export default function BooksSection({ books }: { books: Book[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentBooks = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return books.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <BooksMainLayout>
      <BooksLayout>
        <BooksList books={currentBooks} />
      </BooksLayout>

      <Pagination
        currentPage={currentPage}
        totalCount={books.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </BooksMainLayout>
  );
}

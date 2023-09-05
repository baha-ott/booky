import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function BooksLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 mx-auto md:mx-0 md:grid-cols-2 md:place-items-center lg:grid-cols-3 xl:grid-cols-5">
      {children}
    </div>
  );
}

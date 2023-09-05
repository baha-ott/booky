type Props = {
  children: React.ReactNode;
};

function BooksMainLayout({ children }: Props) {
  return <div className="mt-8 grid grid-cols-1 gap-8">{children}</div>;
}

export default BooksMainLayout;

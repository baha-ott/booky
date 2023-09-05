export default function HomeHero({ books }: { books: Book[] }) {
  const heroItems = books.map((b) => (
    <div className="relative" key={b.id}>
      <img src={b.thumbnail} alt={b.description} className="rounded-lg" />
      <div className="absolute bottom-8 left-4 text-white">
        <p className="text-xl md:text-2xl lg:text-3xl mb-2">{b.title}</p>
        <p className="text-xs md:text-sm lg:text-md text-slate-100">
          {b.publisher}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center gap-8 mt-8 mb-32 xl:flex-row xl:justify-between xl:gap-4 ">
      {heroItems}
    </div>
  );
}

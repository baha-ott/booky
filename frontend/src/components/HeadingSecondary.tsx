type Props = {
  title: string;
  className?: string;
};

export default function HeadingSecondary({ title, className }: Props) {
  return (
    <h2
      className={`text-3xl lg:text-4xl font-semibold mt-8 text-center lg:text-left${
        className ? className : ""
      }`}
    >
      {title}
    </h2>
  );
}

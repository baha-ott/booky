type Props = {
  tags: string[];
};

export default function Tags({ tags }: Props) {
  return (
    <div className="flex gap-2 items-center mb-2">
      {tags.map((tag, i) => (
        <p className="text-gray-500" key={i}>
          {tag}
        </p>
      ))}
    </div>
  );
}

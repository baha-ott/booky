import React from "react";

type Props = {
  title: string;
  publisher: string;
};

export default function BookDescription({ title, publisher }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <h3>{title}</h3>
      <p className="text-gray-500 text-xs">{publisher}</p>
    </div>
  );
}

import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-full py-8 md:px-8 lg:px-16 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

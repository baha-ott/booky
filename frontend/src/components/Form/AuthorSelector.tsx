import { useState } from "react";
import {
  useAddAuthorMutation,
  useGetAuthorsQuery,
} from "../../api/apiSlice";
import useToggle from "../../hooks/useToggle";
import { Field } from "formik";
import { nanoid } from "@reduxjs/toolkit";

type Props = {};

function AuthorSelector({}: Props) {
  const [toggleAuthor, setToggleAuthor] = useToggle(false);
  const [author, setAuthor] = useState("");
  const [addAuthor] = useAddAuthorMutation();

  const hanndleClick = (e: any) => {
    switch (e.detail) {
      case 2: {
        setToggleAuthor(!toggleAuthor);
        break;
      }
    }
  };
  
  const handleAuthorTyping = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthor(e.target.value);

  const {
    data: authors,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAuthorsQuery("");

  let authorSelector;

  if (isLoading) {
    authorSelector = <h1>getiing authors data </h1>;
  }

  if (isSuccess) {
    authorSelector = (
      <div>
        <Field
          name="authorId"
          as="select"
          className="my-select mt-4"
          onClick={hanndleClick}
        >
          {authors.map((author: Author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </Field>
        <p className="text-red-500">Dobule click to add new author</p>
      </div>
    );

    if (isError) {
      <h1>{error}</h1>;
    }
  }

  return (
    <>
      {toggleAuthor ? (
        <div className="flex items-center gap-2 ">
          <Field
            type="text"
            name="authorId"
            className="border rounded-md px-2 py-1"
            value={author}
            onClick={hanndleClick}
            onChange={handleAuthorTyping}
          />

          <button
            className="border px-2 py-1 rounded-md"
            onClick={() => addAuthor({ id: +nanoid(), name: author })}
          >
            Add new Author
          </button>
        </div>
      ) : (
        authorSelector
      )}
    </>
  );
}

export default AuthorSelector;

// react
import { useState } from "react";
// store
import { updateSearch } from "../../features/searchSlice";
// react-redux
import { useDispatch } from "react-redux";
// custom hooks
import useDebounce from "../../hooks/useDebounce";

export default function Search({}) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useDebounce(() => dispatch(updateSearch(search)), 500, [search]);
  // to only fetch data after the user stopped typing

  const handleSearchTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex gap-8 items-center sm:w-full">
      <input
        type="search"
        placeholder="Search..."
        className="flex-2 outline-none ml-8 md:ml-0 px-4 py-2 border w-full border-gray-200/80 rounded-md placeholder:text-gray-300"
        value={search}
        onChange={handleSearchTyping}
      />
    </div>
  );
}

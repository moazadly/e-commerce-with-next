"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const handelSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    router.push(`/list?name=${searchTerm}`);
  };
  return (
    <form
      className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handelSearch}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for product"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search icon" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;

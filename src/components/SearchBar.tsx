import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex flex-grow bg-blue-50 items-center space-x-1 px-2 py-2 rounded-md">
      <Search className="cursor-pointer text-gray-500" />
      <input
        className="bg-transparent outline-none shadow-none w-full"
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default SearchBar;

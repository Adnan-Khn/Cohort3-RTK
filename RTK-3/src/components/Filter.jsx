import { Search } from "lucide-react";
import React, { useState } from "react";

const Filter = ({filterProds}) => {
   const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="w-full mb-8 flex items-center justify-between gap-3">
      <div className="flex flex-1 items-center gap-3">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full p-3 rounded-2xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-purple-500 transition"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            filterProds(e.target.value, category);
          }}
        />
        <Search className="text-zinc-400 hover:text-purple-500 transition" />
      </div>
      <div >
        <select className="p-3 text-white  border border-zinc-700 outline-0 rounded-2xl "
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            filterProds(searchTerm, e.target.value);
          }}
        >
          <option value="" className="rounded-2xl">All Categories</option>
          <option value="groceries" className="rounded-2xl">Groceries</option>
          <option value="beauty" className="rounded-2xl">Beauty</option>
          <option value="furniture" className="rounded-2xl">Furniture</option>
          <option value="fragrances" className="rounded-2xl">Fragrance</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

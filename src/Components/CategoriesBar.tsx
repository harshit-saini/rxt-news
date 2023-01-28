import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";

const categories = [
  "all",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const CategoriesBar = () => {
  return (
    <div className="md:text-center flex w-screen overflow-scroll md:overflow-auto md:justify-center mb-3">
      {categories.map((category) => (
        <div className="bg-gray-100 rounded-full cursor-pointer inline-block px-3 py-1 m-2">
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;

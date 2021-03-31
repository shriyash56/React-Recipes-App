import React, { useState } from "react";
import SearchRecipe from "./SearchRecipe";
import "../css/recipe.css";

export default function Search() {
  const [pages, setpages] = useState({
    start: 0,
    end: 15,
  });
  const [fetch, setfetch] = useState(false);
  const handlePrev = (e) => {
    setfetch(!fetch);
    setpages({ ...pages, start: pages.start - 15, end: pages.end - 15 });
  };

  const handleNext = (e) => {
    setfetch(!fetch);
    setpages({ ...pages, start: pages.start + 15, end: pages.end + 15 });
  };

  const handleFetch = () => {
    setfetch(!fetch);
  };

  return (
    <>
      <SearchRecipe
        start={pages.start}
        end={pages.end}
        fetch={fetch}
        handleFetch={handleFetch}
      />
      {fetch && (
        <div className="flex flex-row justify-center bg-green-300">
          <br />
          {pages.start === 0 ? (
            <button className="border-solid border-4 border-gray-900 hover:border-blue-900 bg-green-200 rounded-full py-3 px-6 focus:outline-none disabled:opacity-50" disabled>
              Prev
            </button>
          ) : (
            <button
              className="border-solid border-4 border-gray-900 hover:border-blue-900 rounded-full py-3 px-6 focus:outline-none"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}

          <button
            className="border-solid border-4 border-gray-900 hover:border-blue-900 rounded-full py-3 px-6 focus:outline-none"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

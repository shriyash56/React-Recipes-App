import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../css/recipe.css";
import "react-toastify/dist/ReactToastify.css";
import img from "../img/loader.gif";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_ID = process.env.REACT_APP_ID;

export default function SearchRecipe({ start, end, fetch, handleFetch }) {

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("cream");

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=${start}&to=${end}&calories=591-722&health=alcohol-free`
      )
      .then((response) => {
        if (response.data.count == 0) {
          toast.error("⚠️ Please Enter Valid Dish");
        }
        setrecipes(response.data.hits);
        handleFetch();
      })
      .catch((err) => {
        toast.error("⚠️ Please Enter Valid Dish");
      });
  }, [query, start, end]);

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setquery(search);
    setsearch("");
    handleFetch();
  };

  return (
    <div className="recipeContainer">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="search"
          placeholder="Search Here..."
          value={search}
          onChange={handleSearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>



      {!fetch && (
        <div className="flex justify-center">
          <img src={img} />
        </div>
      )}
     {fetch &&  <div className="grid grid-cols-1 gap-2  md:place-items-center justify-items-stretch">
        {recipes.map((ele, index) => {
          return (
            <Recipe
              key={index}
              title={ele.recipe.label}
              calories={ele.recipe.calories}
              image={ele.recipe.image}
              ingredients={ele.recipe.ingredients}
            />
          );
        })}
      </div>}
     <br/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const APP_ID = "f1edcdbc";
  const APP_KEY = "3143fffeca619efa7a8424ced2f4a3d9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    window.location.href = "#myrecipes";
  };

  const getBreafast = (e) => {
    e.preventDefault();
    setQuery("breakfast");
    window.location.href = "#myrecipes";
  };

  const getChicken = (e) => {
    e.preventDefault();
    setQuery("chicken");
    window.location.href = "#myrecipes";
  };

  const getCakes = (e) => {
    e.preventDefault();
    setQuery("cake");
    window.location.href = "#myrecipes";
  };

  const getSalad = (e) => {
    e.preventDefault();
    setQuery("salad");
    window.location.href = "#myrecipes";
  };

  const getBBQ = (e) => {
    e.preventDefault();
    setQuery("bbq");
    window.location.href = "#myrecipes";
  };
  const getCookies = (e) => {
    e.preventDefault();
    setQuery("cookies");
    window.location.href = "#myrecipes";
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search top recipe and more"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="category-text">
        <p>PERSONALIZE YOUR EXPERIENCE</p>
        <h1>What are your favorite cuisines?</h1>
      </div>
      <div className="categories">
        <div>
          <a href="#myrecipes" onClick={getBreafast}>
            <img
              className="cateitems"
              src={require("./img/breakfast.jpg")}
              alt="breakfast"
            />
          </a>
          <p>Breakfast</p>
        </div>
        <div>
          <a href="#myrecipes" onClick={getChicken}>
            <img
              className="cateitems"
              src={require("./img/chicken.jpeg")}
              alt="chicken"
            />
          </a>
          <p>Chicken</p>
        </div>
        <div>
          <a href="#myrecipes" onClick={getCakes}>
            <img
              className="cateitems"
              src={require("./img/cakes.jpg")}
              alt="cakes"
            />
          </a>
          <p>Cakes</p>
        </div>
        <div>
          <a href="#myrecipes" onClick={getBBQ}>
            <img
              className="cateitems"
              src={require("./img/bbq.png")}
              alt="bbq"
            />
          </a>
          <p>BBQ</p>
        </div>
        <div>
          <a href="#myrecipes" onClick={getSalad}>
            <img
              className="cateitems"
              src={require("./img/salad.jpeg")}
              alt="salad"
            />
          </a>
          <p>Salad</p>
        </div>
        <div>
          <a href="#myrecipes" onClick={getCookies}>
            <img
              className="cateitems"
              src={require("./img/cookies.jpg")}
              alt="cookies"
            />
          </a>
          <p>Cookies</p>
        </div>
      </div>

      <div className="recipes" id="myrecipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;

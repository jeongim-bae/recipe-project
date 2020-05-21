import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />
      <h3>{title}</h3>
      <ul>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ul>
      <p>{Math.floor(Number(calories))} calories </p>
    </div>
  );
};

export default Recipe;

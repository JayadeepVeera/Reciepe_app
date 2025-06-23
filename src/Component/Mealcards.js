import React from "react";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  return (
    <div className="meals">
      {!detail || detail.length === 0
        ? "Data Not Found"
        : detail.map((curItem) => (
            <div className="mealImg" key={curItem.idMeal}>
              <img src={curItem.strMealThumb} alt={curItem.strMeal} />
              <p>{curItem.strMeal}</p>
              <NavLink to={`/${curItem.idMeal}`}>
                <button>Recipe</button>
              </NavLink>
            </div>
          ))}
    </div>
  );
};

export default Mealcards;

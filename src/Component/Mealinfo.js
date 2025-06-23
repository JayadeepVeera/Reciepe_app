import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await response.json();
        setInfo(jsonData.meals[0]);
      } catch (error) {
        console.error("Failed to fetch meal info:", error);
        setInfo(null);
      }
    };

    getInfo();
  }, [mealid]);

  return (
    <div>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className="info">
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;

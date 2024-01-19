import React, { useState } from "react";

const Ingredients = () => {
  const ingredientPrices = {
    lettuce: 0.5,
    bacon: 1.0,
    cheese: 0.8,
    meat: 2.0
  };

  const [ingredientCounts, setIngredientCounts] = useState({
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const ingredients = ["lettuce", "bacon", "cheese", "meat"];

  const calculateTotalPrice = () => {
    return ingredients.reduce((total, ingredient) => {
      return total + ingredientCounts[ingredient] * ingredientPrices[ingredient];
    }, 3.50); 
  };

  const addRemoveIngredient = (action, ingredient) => {
    setIngredientCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      let count = updatedCounts[ingredient];

      if (action === "add") {
        count = count + 1;
      } else {
        count = Math.max(count - 1, 0);
      }

      updatedCounts[ingredient] = count;
      return updatedCounts;
    });
  };

  const burgerContent = () => {
    let burger = [];

    for (let i = 0; i < ingredientCounts.lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }
    for (let i = 0; i < ingredientCounts.bacon; i++) {
      burger.push(<div key={burger.length} className="baconSide"></div>);
    }
    for (let i = 0; i < ingredientCounts.cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }
    for (let i = 0; i < ingredientCounts.meat; i++) {
      burger.push(<div key={burger.length} className="meatSide"></div>);
    }

    if (burger.length === 0)
      burger.push(
        <p key="0">Please start adding ingredients!</p>
      );

    return burger;
  };

  return (
    <>
      <div className="burgerIngredients">
        <div className="topSide"></div>
        {burgerContent()}
        <div className="bottomSide"></div>
      </div>
      <div className="fixed-container">
        <div className="centered-container">
            <div className="ingredients-container">
            <p>
                Current price: <strong>${calculateTotalPrice().toFixed(2)}</strong>
            </p>
            {ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-row">
                <p>
                    <strong>{ingredient}</strong>
                </p>
                <button
                onClick={() => addRemoveIngredient("remove", ingredient)}
                className="action-button"
                disabled={ingredientCounts[ingredient] === 0}
                style={{
                    backgroundColor: ingredientCounts[ingredient] === 0 ? "#ac9980" : "#d39952",
                    color: "#ccc",
                    border: "1px solid #7e7365",
                    cursor: ingredientCounts[ingredient] === 0 ? "not-allowed" : "",  
                }}>Less</button>
                <button
                    onClick={() => addRemoveIngredient("add", ingredient)}
                    className="action-button"
                    style={{
                        backgroundColor: "#8f5e1e",
                        color: "#fff"
                    }}
                >
                    More
                </button>
                </div>
            ))}
            <button className="order-button">ORDER NOW</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;

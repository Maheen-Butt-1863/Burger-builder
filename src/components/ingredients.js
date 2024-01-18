import React, { useState } from "react";

export default function Ingredients() { 
    const [ingredientCounts, setIngredientCounts] = useState({
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const ingredients = ["lettuce", "bacon", "cheese", "meat"];

  const addRemoveIngredient = (action, ingredient) => {
    setIngredientCounts(prevCounts => {
      const updatedCounts = { ...prevCounts };
      console.log("updated",updatedCounts)
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

    
  
    return <>
             <div className="burgerIngredients">
                <div className="topSide"></div>
                <div className="bottomSide"></div>
            </div>
            <div className="centered-container">
                <div className="ingredients-container">
                    <p>Current price: <strong>$3.50</strong></p>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="ingredient-row">
                        <p><strong>{ingredient}</strong></p>
                        <button onClick={() => addRemoveIngredient('add', ingredient)} className="action-button">More</button>
                        <button onClick={() => addRemoveIngredient('remove', ingredient)} className="action-button">Less</button>
                        </div>
                    ))}
                    <button className="order-button">ORDER NOW</button>
                </div>
            </div>
    </>
        
  }
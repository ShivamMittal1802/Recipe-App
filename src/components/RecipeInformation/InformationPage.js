import React, { useEffect, useState } from "react";

export default function InformationPage({ recipeItemInfo }) {
  const { itemId, itemName, itemImage } = recipeItemInfo;
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    const fetchInstructions = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${itemId}/analyzedInstructions?apiKey=acde54b0e35246fcbbdfaa3ab947aa8a`
        );
        const data = await response.json();
        if (data.length > 0) {
          setSteps(data[0].steps.map(step => step.step));
        }
      } catch (error) {
        console.log("Error fetching instructions:", error);
      }
    };

    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${itemId}/ingredientWidget.json?apiKey=acde54b0e35246fcbbdfaa3ab947aa8a`
        );
        const data = await response.json();
        const ingredientNames = data.ingredients.map(
          ingredient => ingredient.name
        );
        setIngredients(ingredientNames);
      } catch (error) {
        console.log("Error fetching ingredients:", error);
      }
    };

    const fetchNutritionData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${itemId}/nutritionWidget.json?apiKey=acde54b0e35246fcbbdfaa3ab947aa8a`
        );
        const data = await response.json();
        const nutrients = data.nutrients.map(nutrient => ({
          name: nutrient.name,
          amount: nutrient.amount,
          unit: nutrient.unit,
          percentOfDailyNeeds: nutrient.percentOfDailyNeeds
        }));
        setNutritionData(nutrients);
      } catch (error) {
        console.log("Error fetching nutrition data:", error);
      }
    };

    fetchIngredients();
    fetchInstructions();
    fetchNutritionData();
  }, [itemId]);

  return (
    <div>
      <img className="information-image" src={itemImage} alt={itemName} />
      <h3>{itemName}</h3>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <h2>Nutrition Table</h2>
        <table>
          <thead>
            <tr>
              <th>Nutrition</th>
              <th>Per 100 g</th>
              <th>Per serve %RDA</th>
            </tr>
          </thead>
          <tbody>
            {nutritionData.map((nutrient, index) => (
              <tr key={index}>
                <td>{nutrient.name}</td>
                <td>
                  {nutrient.amount} {nutrient.unit}
                </td>
                <td>{nutrient.percentOfDailyNeeds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

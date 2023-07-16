import React, { useState } from "react";
import ListItem from "./ListItem";

function RecipesList({ recipeItemInfo, setRecipeItemInfo }) {
  const [recipeListItems, setRecipeListItems] = useState([]);

  const fetchData = query => {

    if (query.trim() === "") {
      setRecipeListItems([]);
      return;
    }

    const url = `https://api.spoonacular.com/food/search?apiKey=acde54b0e35246fcbbdfaa3ab947aa8a&query=${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          const results = data.searchResults[0].results;
          setRecipeListItems(results);
          // console.log("chal rha ", results);
        } else {
          console.log("Invalid API response:", data);
        }
      })
      .catch(error => {
        console.log("Error fetching data:", error);
      });
  };

  const handleSearch = event => {
    const query = event.target.value;
    fetchData(query);
  };

  return (
    <>
      <div className="RecipesList">
        <div className="recipeList-top">
          <div>Recipes List</div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              onChange={handleSearch}
            />
            {/* <span className="input-group-btn">
              <button className="btn btn-search" type="button">
                <i className="fa fa-search fa-fw"></i> Search
              </button>
            </span> */}
          </div>
        </div>
        <ListItem
          recipeListItems={recipeListItems}
          recipeItemInfo={recipeItemInfo}
          setRecipeItemInfo={setRecipeItemInfo}
        />
      </div>
    </>
  );
}

export default RecipesList;

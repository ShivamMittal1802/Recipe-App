import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ReceipesList from "./components/ReceipiesList/ReceipiesList";
import FavoriteRecepies from "./components/FavoriteReceipies/FavoriteRecepies";
import RecepiInformation from "./components/RecipeInformation/RecipeInfomation";
import Auth from "./components/Auth/Auth";

function App() {
  const [recipeItemInfo, setRecipeItemInfo] = useState({});
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ReceipesList
                recipeItemInfo={recipeItemInfo}
                setRecipeItemInfo={setRecipeItemInfo}
              />
            }
          />
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/FavoriteRecepies" element={<FavoriteRecepies />} />
          <Route
            path="/RecipeInformation"
            element={<RecepiInformation recipeItemInfo={recipeItemInfo} />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

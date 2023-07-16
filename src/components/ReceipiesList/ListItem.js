import React, { useState, useEffect } from "react";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ListItem({ recipeListItems, recipeItemInfo, setRecipeItemInfo }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (recipeItemInfo && recipeItemInfo.itemId) {
      setFavorites(prevFavorites =>
        prevFavorites.includes(recipeItemInfo.itemId)
          ? prevFavorites
          : [...prevFavorites, recipeItemInfo.itemId]
      );
    }
  }, [recipeItemInfo]);

  const getRecipeItemList = () => {
    return recipeListItems.map(item => {
      return {
        itemId: item.id,
        itemName: item.name,
        itemImage: item.image,
        itemInfo: <div dangerouslySetInnerHTML={{ __html: item.content }} />
      };
    });
  };
  const recipiItemList = getRecipeItemList();
  console.log(recipiItemList);;

  const toggleFavorite = itemId => {
    if (favorites.includes(itemId)) {
      setFavorites(prevFavorites => prevFavorites.filter(id => id !== itemId));
    } else {
      setFavorites(prevFavorites => [...prevFavorites, itemId]);
    }
  };

  const handleItemClick = element => {
    setRecipeItemInfo(element);
  };

  const listItems = recipiItemList.map(element => {
    const isFavorite = favorites.includes(element.itemId);

    return (
      <div key={element.itemId} className="receipi-item-section">
        <div>
          <div className="receipe-heading">
            <h2>
              <Link
                to="/RecipeInformation"
                onClick={() => handleItemClick(element)}
              >
                {element.itemName}
              </Link>
            </h2>
            <div
              className="add-fav"
              onClick={() => toggleFavorite(element.itemId)}
            >
              {isFavorite ? (
                <RiHeart3Fill className="heart" />
              ) : (
                <RiHeart3Line className="heart" />
              )}
            </div>
          </div>
          <div>{element.itemInfo}</div>
        </div>
        <div>
          <img className="image" src={element.itemImage} alt="" />
        </div>
      </div>
    );
  });

  return <div className="list-items">{listItems}</div>;
}

export default ListItem;

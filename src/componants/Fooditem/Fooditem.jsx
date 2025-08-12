import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { Summit } from "../../context/Summit"; // Ensure this path matches your project structure

const Fooditem = ({ id, name, price, description, image }) => {
  const { cardItems, addToCard, removeFromCard } = useContext(Summit);

  const handleAdd = (e) => {
    e.stopPropagation();
    console.log("add clicked");
    addToCard(id);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    console.log("remove clicked");
    removeFromCard(id);
  };

  const itemCount = cardItems[id] || 0;

  return (
    <div className="Fooditem">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />

        {!itemCount ? (
          <img
            className="add add-white"
            onClick={handleAdd}
            src={assets.add_icon_white}
            alt="+"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={handleRemove}
              src={assets.remove_icon_red}
              alt="-"
            />
            <p>{itemCount}</p>
            <img
              onClick={handleAdd}
              src={assets.add_icon_green}
              alt="+"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ItemCard({ itemId, imgSrc, name, price, ratings }) {
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const { addToCart } = useContext(UserContext);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => {
              addToCart(itemId);
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function CartItem({ itemId, name, imgSrc, price, itemQuantity, totalPrice }) {
  const { cartItem, setCartItem, itemVoiceQuantity } = useContext(UserContext);

  useEffect(() => {
    updateQty("add", itemVoiceQuantity.id, true);
  }, [itemVoiceQuantity]);

  const updateQty = (action, id, voice) => {
    if (action === "add") {
      let newItem = [];
      cartItem.map((ele) => {
        if (ele.id === id) {
          newItem.push({
            ...ele,
            qnt: voice ? itemVoiceQuantity.qnt : ele.qnt + 1,
            totalPrice:
              price *
              (voice ? itemVoiceQuantity.qnt : ele.qnt === 1 ? 2 : ele.qnt + 1),
          });
        } else {
          newItem.push(ele);
        }
      });
      setCartItem(newItem);
    } else {
      if (itemQuantity == 1) {
        setCartItem(cartItem.filter((ele) => ele.id !== id));
      } else {
        let newItem = [];
        cartItem.map((ele) => {
          if (ele.id === id) {
            newItem.push({
              ...ele,
              qnt: ele.qnt - 1,
              totalPrice: price * (ele.qnt === 1 ? 2 : ele.qnt - 1),
            });
          } else {
            newItem.push(ele);
          }
        });
        setCartItem(newItem);
      }
    }
  };
  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {itemQuantity}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQty("remove", itemId, false)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQty("add", itemId, false)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{totalPrice}</span>
      </p>
    </div>
  );
}

export default CartItem;

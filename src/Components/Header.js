import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import AlanLogo from "../Images/alan-logo-icon-color.png";
import Avatar from "../Images/gamer.png";

function Header() {
  // const [{ cart }, dispatch] = useStateValue();
  const { cartItem } = useContext(UserContext);
  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <header>
      <img src={AlanLogo} alt="logo" className="logo" />

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className={`${!cartItem.length ? "noCartItem" : "cart_content"}`}>
          <p>{cartItem ? cartItem.length : ""}</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img src={Avatar} alt="profile" />
        </div>
        <h2 className="userName">Mayank</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;

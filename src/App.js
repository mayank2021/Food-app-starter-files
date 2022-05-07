import "./App.css";
import { useEffect, useState, useContext } from "react";
import Header from "./Components/Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import CartImg from "./Images/cart.png";
import BannerName from "./Components/BannerName";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Data/Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
import SubMenuContainer from "./Components/SubMenuContainer";
import CartItem from "./Components/CartItem";
import { UserContext } from "./context/UserContext";

function App() {
  // const alanBtnInstance = useRef(null);
  const [highlightedId, setHighlightedId] = useState("1");
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

  //context
  const { cartItem, setCartItem, setItemVoiceQuantity } =
    useContext(UserContext);

  const scroll = (x) => {
    if (x < 0) {
      x = 0;
    }
    window.scrollTo(0, x);
  };

  useEffect(() => {
    alanBtn({
      key: "YOUR_ALAN_KEY_HERE",
      onCommand: ({ command }) => {
        if (command === "test") {
          //do something
        }
      },
    });
  }, []);
  return (
    <div className="App">
      {/* Header section */}
      <Header />

      <main>
        <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
            <BannerName name={"Mayank"} discount={"20"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == highlightedId ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {cartItem.length === 0 ? (
            <div className="addSomeItem">
              <img src={CartImg} alt="cart" className="emptyCart" />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />

                <div className="cartItems">
                  {cartItem &&
                    cartItem.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        itemQuantity={data.qnt}
                        price={data.price}
                        totalPrice={data.totalPrice}
                      />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import AlanWhite from "../Images/alan-logo-icon-white.png";

function DebitCard() {
  return (
    <div className="cardGroup">
      <img src={AlanWhite} alt="logo" className="cardLogo" />

      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt=""
        className="cardChip"
      />

      <div className="card_number">1234 567 8920 3200</div>
      <div className="card_name">Mayank Sonkar</div>
      <div className="card_from">10/21</div>
      <div className="card_to">10/25</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;

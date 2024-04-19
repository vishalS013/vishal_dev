import React from "react";

const Fruit = ({ name, Price, emoji, soldout }) => {
  return (
    <>
      {/* <li>
        {name}
        {Price}
        {emoji}
        {soldout ? "soldout" : ""}
      </li> */}

      {/* Conditionally rendering via checking price */}
      {/* {Price > 5 ? (
        <li>
          {name}
          {Price} {emoji}
        </li>
      ) : (
        ""
      )} */}

      {/* <li>{name}</li>
        <li>{Price} </li>
        <li>{emoji}</li> */}
    </>
  );
};

export default Fruit;

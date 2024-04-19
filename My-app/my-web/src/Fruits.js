import React from "react";
import Fruit from "./Fruit";

const Fruits = () => {
  const fruits = [
    { name: "Apple", Price: 100, emoji: "emoji", soldout: false },
    { name: "Kiwi", Price: 200, emoji: "happy", soldout: true },
    { name: "orange", Price: 300, emoji: "good", soldout: false },
    { name: "mango", Price: 500, emoji: "good", soldout: false },
  ];

  //   Conditionally rendering data via taking empty variable and checking condition
  let message;
  const display = false;
  if (display) {
    message = <h1>working first </h1>;
  } else {
    message = (
      <div>
        <ul>
          {fruits.map((fruit) => (
            // this is Child component =========>
            <Fruit
              key={fruit.name}
              name={fruit.name}
              Price={fruit.Price}
              emoji={fruit.emoji}
              soldout={fruit.soldout}
            />
          ))}
        </ul>
      </div>
    );
  }
  return message;
};

export default Fruits;

import React, { useState } from "react";
import "./App.css";
import { fruits } from "./FruitsArray";

const FruitsSearchList = () => {
  const [fruitsList, setFruitsList] = useState(fruits);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setFruitsList(
      fruitsList.filter(fruit =>
        fruit.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setInputValue(e.target.value);

    if (!e.target.value.length) {
      //jesli input nie ma długości to zwracamy początkowy stan tablicy
      setFruitsList(fruits);
    }
  };

  return (
    <div className="App">
      <label for="fruit">Search fruit</label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        name="fruit"
        id="fruit"
      />
      <ul>
        {fruitsList.map(fruit => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsSearchList;
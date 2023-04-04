import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  //optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => response.json())
      .then((data) => setItems(data.data))
      .catch((err) => {
        // ToDo : hand
        console.log(err);
      });
  }, [optionType]);

  // TODO replace 'null' with ToppingOption when available;

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

  return <div></div>;
}

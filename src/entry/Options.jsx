import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  //optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((err) => {
        // ToDo : hand
        console.log(err);
      });
  }, [optionType]);

  // TODO replace 'null' with ToppingOption when available;

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems} </Row>;
}
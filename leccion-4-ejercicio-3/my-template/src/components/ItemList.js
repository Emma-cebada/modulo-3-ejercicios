import React from "react";
import Item from "./Item";

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5
  },
  {
    name: 'Helado de chocolate',
    description: 'Fresquito y sabroso',
    quantity: 4,
    category: 'Congelados',
    price: 6
  },
];

let myArray = []
let arrayPrices = []
arrayPrices = arrayOfItems.filter((itemPrice) => itemPrice.price < 10)

myArray = arrayPrices.map((itemInfo, i) => (<li key={i}>
  <Item
    name={itemInfo.name}
    description={itemInfo.description} quantity={itemInfo.quantity}
    category={itemInfo.category}
    price={itemInfo.price}
  />
</li>
));

class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        {myArray}
      </ul>
    );
  }
}

export default ItemList;
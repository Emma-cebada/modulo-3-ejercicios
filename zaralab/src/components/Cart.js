import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <section className="cart">
        <h3 className="cart__title">Cesta de la compra</h3>
        <ul className="cart__list">
          <li className="cart__list--item">
            <span className="cartListItem__concept">Camiseta</span>
            <span className="cartListItem__amount">x 1</span>
            <span className="cartListItem__price">69€</span>
          </li>
        </ul>
      </section>
    );
  }
}

export default Cart;

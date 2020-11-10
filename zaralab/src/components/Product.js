import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    const shoppingButton = ev.currentTarget;
    console.log("Me han clickado", ev);
  }

  render() {
    return (
      <article className="shelves__article">
        <div className="shelves__article--imgContainer">
          <img className="shelves__article--img" src={this.props.src} alt="Imagen del producto" />
        </div>
        <h3 className="shelves__article--title">{this.props.title}</h3>
        <div className="shelves__article--buyPanel">
          <div className="buyPanel__size">
            <h4 className="buyPanel__section--title">Talla:</h4>
            <select name="" id="" className="buyPanel__size--select">
              <option value="" disabled selected>
                Escoge:
                      </option>
              <option value="XL">XL</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="S">S</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="buyPanel__amount">
            <h4 className="buyPanel__section--title">Cantidad:</h4>
            <button className="buyPanel__amount--add">+</button>
            <input type="text" name="" id="" className="buyPanel__amount--number" value="2" />
            <button className="buyPanel__amount--sub">-</button>
          </div>
          <div className="buyPanel__price">
            <h4 className="buyPanel__section--title">{this.props.price}:</h4>
            <span className="buyPanel__price--number">39</span>€
                  </div>
          <button className="buyPanel__buy" onClick={this.handleClick}>Comprar</button>
        </div>
      </article>
    );
  }
}

export default ProductList;
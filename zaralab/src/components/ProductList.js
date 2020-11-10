import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="shelves">
        <h3 className="shelves__title">Lista de productos</h3>
        <Product title="Camiseta" price={39} />
        <Product title="Pantalón" price={59} />
        <Product title="Botas" price={89} />
        <Product title="Mantitas suaves" price={14} />
        <article className="shelves__article">
          <div className="shelves__article--imgContainer">
            <img className="shelves__article--img" src="./images/pants-simple-by_vexels.png" />
          </div>
          <h3 className="shelves__article--title">Pantalón</h3>
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
              <h4 className="buyPanel__section--title">Precio:</h4>
              <span className="buyPanel__price--number">59</span>€
                  </div>
            <button className="buyPanel__buy">Comprar</button>
          </div>
        </article>
        <article className="shelves__article">
          <div className="shelves__article--imgContainer">
            <img className="shelves__article--img" src="./images/arctic-boots-illustration-by-Vexels.png" />
          </div>
          <h3 className="shelves__article--title">Botas</h3>
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
              <h4 className="buyPanel__section--title">Precio:</h4>
              <span className="buyPanel__price--number">89</span>€
                  </div>
            <button className="buyPanel__buy">Comprar</button>
          </div>
        </article>
        <article className="shelves__article">
          <div className="shelves__article--imgContainer">
            <img className="shelves__article--img" src="./images/winter-blankets-flat-by-Vexels.png" />
          </div>
          <h3 className="shelves__article--title">Mantitas suaves</h3>
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
              <h4 className="buyPanel__section--title">Precio:</h4>
              <span className="buyPanel__price--number">14</span>€
                  </div>
            <button className="buyPanel__buy">Comprar</button>
          </div>
        </article>
      </section>
    );
  }
}

export default ProductList;
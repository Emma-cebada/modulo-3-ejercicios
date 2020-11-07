import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{this.props.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className="text-muted">{this.props.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.category}</div>
        <h5 className="price">{this.props.price}€</h5>
      </div>
    );
  }
}

//Esta es la parte que es el ejercicio 3
Item.defaultProps = {
  description: "No hay descripción."
}

//Esta parte con la del import de arriba es del ejercicio 4
Item.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Item;
import React from "react";

const handleSelect = event => {
  const usersSelection = event.target.value;
  alert(`Tu destino es viajar a ${usersSelection}`);
}

class Destiny extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="cities" className="label">
          Elige tu destino:
          <select id="cities" name="cities" onChange={handleSelect} className="select">
            <option value="Buenos aires">Buenos Aires</option>
            <option value="Sidney">Sidney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
            <option value="Corea del Sur">Corea del Sur</option>
            <option value="Londres">Londres</option>
            <option value="New York">New York</option>
          </select>
        </label>
        <CityImage></CityImage>
      </form>
    )
  }
}

export default Destiny; 
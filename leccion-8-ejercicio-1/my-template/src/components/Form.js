import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" />
        <label htmlFor="description">Descripción</label>
        <textarea name="description" id="description"></textarea>
        <select name="language" id="language">
          <option value="" disabled>Escoge un idioma:</option>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </form>
    )
  }
}

export default Form;
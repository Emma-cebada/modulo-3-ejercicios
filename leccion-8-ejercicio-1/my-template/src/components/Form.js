import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    const id = target.id;
    this.setState({ [id]: value }, () => { this.sendDataToApp(this.state) }
    )
  }

  sendDataToApp(data) {
    this.props.handleFormInfo(data);
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="description">Descripción</label>
        <textarea name="description" id="description" value={this.state.description} onChange={this.handleChange} ></textarea>
        <select name="language" id="language" value={this.state.language} onChange={this.handleChange}>
          <option value="" disabled>Escoge un idioma:</option>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </form >
    )
  }
}

export default Form;
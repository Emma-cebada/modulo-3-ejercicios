import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Recordar que esto hay que ponerlo siempre (bind), si no se pone da error.
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ''
    };
  }

  handleChange(ev) {
    const inputText = ev.target.value;
    this.setState({
      text: inputText
    });
  }

  render() {
    const userText = this.state.text;
    return (
      <div className="App">
        <form>
          <label htmlFor="text" placeholder="Escribe aquí">¿Qué quieres decirme?</label>
          <input type="text" id="text" name="text" onChange={this.handleChange} className="input"></input>
        </form>
        <p>Esto es lo que estás escribiendo en el input: <span className="paragraphText">{userText}</span></p>
      </div>
    )
  }
}

export default App;

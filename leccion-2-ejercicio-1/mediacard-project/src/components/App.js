import React from "react";
import JoelImg from "../images/joel.jpg";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <article className="card">
          <header className="cardHeader">
            <img className="cardImg" title="Imagen de Joel"
              alt="Imagen de Joel"
              src={JoelImg}></img>
            <div className="cardData">
              <h2 className="cardTitle">Joel Miller</h2>
              <p className="cardInfo"> Martes 03 de noviembre de 2020</p>
            </div>
          </header>
          <section className="cardBody">
            <p className="cardParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <footer className="cardFooter">
            <p className="cardFooter-paragraph">Leer más...</p>
            <div className="cardContainer-likes">
              <p className="cardNumber">37</p>
              <i class="fas fa-heart cardHeart-icon"></i>
            </div>
          </footer>
        </article>
      </div>
    );
  }
}

export default App;

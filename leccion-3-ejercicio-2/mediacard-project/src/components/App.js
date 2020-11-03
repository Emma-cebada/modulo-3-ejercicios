import React from "react";
import Mediacard from "./Mediacard";
import '../stylesheets/App.css';
import JoelImg from "../images/joel.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Mediacard
          image={JoelImg}
          name="Joel Miller"
          info="Martes 03 de noviembre de 2020"
          paragaph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          footerParagaph="Leer más..."
          number="37"
          heart="fas fa-heart"
        />
      </div>
    )
  }
}

export default App;
import '../stylesheets/App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Counter from './Counter';
import Relax from './Relax';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>El contador con ciclo de vida</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Counter</Link>
              </li>
              <li>
                <Link to="/relax">Relax</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route path="/relax" component={Relax} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
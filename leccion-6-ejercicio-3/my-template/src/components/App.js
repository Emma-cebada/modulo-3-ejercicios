import React from 'react';
import Clock from './Clock';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;

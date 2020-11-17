import react from 'react';
import '../stylesheets/App.css';
import Form from './Form';
import Card from './Card';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.handleFormInfo = this.handleFormInfo.bind(this);
  }

  handleFormInfo(data) {
    this.setState({ user: data })
  }
  render() {
    return (
      <div className="App" >
        <Form handleFormInfo={this.handleFormInfo} />
        <Card upDateUser={this.state.user} />
      </div>
    )
  }
}

export default App;

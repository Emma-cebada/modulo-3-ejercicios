import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleAlert = this.handleAlert.bind(this);
    this.isHating = false;
  }

  handleAlert(event) {
    this.forceUpdate();
    const form = document.querySelector(".form");
    const message = event.target.value;
    const messageLowerCase = message.toLowerCase();
    if (messageLowerCase.includes("cebolla")) {
      form.classList.add("formAlert");
      this.ishating = true;
    } else {
      this.ishating = false;
      form.classList.remove("formAlert");
    }
  };


  render() {
    return (
      <form className="form">
        <label htmlFor="textarea">
          <textarea placeholder="Escibre aquí sobre las cebollas." onChange={this.handleAlert} className="textarea" name="textarea" id="textarea"></textarea>
        </label>
      </form>
    )
  }
}

export default OnionHater;
import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: now.getHours(),
      minutes: now.getMinutes,
      seconds: now.getSeconds,
    };

    this.changeHour = this.changeHour.bind(this);
    setInterval(this.update, 1000);
  }

  changeHour() {
    const now = new Date();

    this.setState({
      minutes: now.getMinutes(),
      seconds: now.getSeconds()
    });
  }

  render() {
    return (
      <div className="clock">
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default Clock;
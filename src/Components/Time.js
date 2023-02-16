import { Component } from "react";
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeNow: " ",
      year: " ",
    };
    // setInterval(() => {
    //   this.setState({ timeNow: this.getDateTime(this.state.timeNow) });
    // }, 1000);
    //this.intervalTime();
  }

  intervalTime() {
    setInterval(() => {
      this.setState({
        timeNow: this.getDateTime(this.state.timeNow),
        year: this.getDateTime(this.state.timeNow),
      });
    }, 1000);
  }
  getDateTime(dateNow) {
    const date = new Date();
    dateNow =
      date.getDate() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getFullYear() +
      "  " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    return dateNow;
  }

  render() {
    const { timeNow, year } = this.state;
    this.intervalTime();
    //  console.log(currentDate);
    return (
      <div className="TimeNow">
        {timeNow}+ "\n" Năm kế : {year}
      </div>
    );
  }
}

export default Time;

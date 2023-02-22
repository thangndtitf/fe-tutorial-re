import logo from "./logo.svg";
import "./App.css";
import Items from "./Components/Items.js";
import { Component } from "react";
import Time from "./Components/Time.js";
import Button from "./Components/Button";
import TextForm from "./Components/TextForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { title: "Di choi", isactive: 0 },
        { title: "Di hoc", isactive: 0 },
        { title: "Di lam", isactive: 1 },
      ],
    };
    this.onItemClick = this.onItemClick.bind(this);
    // this.items = [
    //   { title: "Di choi", isactive: 0 },
    //   { title: "Di hoc", isactive: 0 },
    //   { title: "Di lam", isactive: 1 },
    // ];
  }

  onItemClick(index) {
    var item = this.items.map(function (index) {
      if (index > 0) {
        return this.items[index];
      }
    });
    this.setState({
      items: [item],
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.items.map((item, index) => (
          <Items key={index} item={item} onClick={this.onItemClick(index)} />
        ))}
        {/* <Time />
        <Button /> */}
        <TextForm />
      </div>
    );
  }
}

export default App;

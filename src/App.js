import logo from "./logo.svg";
import "./App.css";
import Items from "./Components/Items.js";
import { Component } from "react";
import Time from "./Components/Time.js";
import Button from "./Components/Button";
class App extends Component {
  constructor(props) {
    super(props);
    this.items = [
      { title: "Di choi", isactive: 0 },
      { title: "Di hoc", isactive: 0 },
      { title: "Di lam", isactive: 1 },
    ];
  }

  render() {
    return (
      <div className="App">
        {this.items.map((item, index) => (
          <Items key={index} item={item} />
        ))}
        <Time />
        <Button />  
      </div>
    );
  }
}

export default App;

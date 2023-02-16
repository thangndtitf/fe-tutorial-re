import { Component } from "react";
import classNames from "classnames";
import "./item.css";
class Items extends Component {
  render() {
    // return <div className="Items">{this.props.item.title}</div>;
    return (
      <div
        className={classNames(
          { "Items-done": this.props.item.isactive === 1 },
          { Items: this.props.item.isactive === 0 }
        )}
      >
        {this.props.item.title}
      </div>
    );
  }
}

export default Items;

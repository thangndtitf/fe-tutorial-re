import { Component } from "react";
import classNames from "classnames";
import "./TextForm.css";
class TextForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTrue: false,
      txtText: "",
    };
    this.checkEmpty = this.checkEmpty.bind(this);
  }

  checkEmpty(e) {
    const ischecked = e.target.value == "" ? e.target.checked : true;

    let value = e.target.value;
    if (e.target.type == "checkbox") {
      value = ischecked;
    }
    console.log(e.target.checked, "checked nè");
    console.log(value, ": value nè");
    console.log(ischecked, ": ischeck nè");
    this.setState({ isTrue: ischecked, txtText: value });
  }

  render() {
    const { isTrue, txtText } = this.state;
    return (
      <div className="textFormCpn">
        <input
          className="textForm"
          onChange={this.checkEmpty.bind(this)}
          value={txtText}
        ></input>
        {console.log(isTrue)}
        <div
          className={classNames(
            { textFormEmptyWarn: isTrue === false },
            {
              textFormEmptyWarn_done: isTrue === true,
            }
          )}
        >
          Vui lòng nhập vào giá trị khác null
        </div>
      </div>
    );
  }
}

export default TextForm;

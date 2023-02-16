import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShip: " ",
    };
  }

  //   getShipmentOrder() {
  //     const sho = Math.random();
  //     var result;
  //     if (sho < 0.5) {
  //       result = 0;
  //     }
  //     if ((sho = 0.5)) {
  //       result = 1;
  //     }
  //     if (sho > 0.5) {
  //       result = 2;
  //     }
  //     return result;
  //   }

  //   getDeliveryStatus(shipmentOrder) {
  //     const result = 0;
  //     switch (shipmentOrder) {
  //       case 0:
  //         result += 1;
  //       case 1:
  //         result += 2;
  //       case 2:
  //         result += 3;
  //     }
  //     return result;
  //   }

  getRandomDeliveryStatus(math) {
    if (math < 0.5) {
      this.setState({
        isShip: "Tao la so 1",
      });
    } else if ((math = 0.5)) {
      this.setState({
        isShip: "Tao la so 2",
      });
    } else if (math > 0.5) {
      this.setState({
        isShip: "Tao la so 3",
      });
    }
  }

  randomDeliveryStatus() {
    setInterval(() => {
      this.getRandomDeliveryStatus(Math.random());
    }, 2000);
  }

  render() {
    this.randomDeliveryStatus();
    const { isShip } = this.state;
    console.log(isShip);
    return <div className="ranDomDeliveryStatus">{isShip}</div>;
  }
}

export default Button;

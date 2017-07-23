import React from "react";
import socketIoClient from "socket.io-client";
import radium from "radium";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center"
  },
  controlContainer: {
    border: "1px solid white",
    borderRadius: "20%",
    margin: "5rem 0",
    display: "flex",
    justifyContent: "space-between"
  },
  led: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "red",
    alignSelf: "center",
    margin: "2rem"
  },
  controlGroup: {
    width: "400px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between"
  },
  button: {
    general: {
      border: "none",
      background: "transparent"
    },
    up: {
      position: "absolute",
      top: 0,
      right: "50%",
      transform: "translateX(50%)"
    },
    down: {
      position: "absolute",
      bottom: 0,
      right: "50%",
      transform: "translateX(50%)"
    }
  }
};

class DroneControl extends React.Component {

  state = {
    connected: false,
    inAir: false
  }

  componentDidMount() {
    this.socket = socketIoClient("http://localhost:3005");
    this.socket.on("connected", () => {
      this.setState({
        connected: true
      });
    });
    this.socket.on("didTakeoff", () => {
      this.setState({
        inAir: true
      });
    });

    this.socket.on("signalLow", () => {
      this.setState({
        inAir: false
      });
    });

    this.socket.on("didLand", () => {
      this.setState({
        inAir: false
      });
    });
  }

  changeState() {
    if (!this.state.inAir) {
      this.socket.emit("takeoff");
    } else {
      this.socket.emit("land");
    }
  }

  render() {
    const { led, button } = styles;
    return (
      <div style={styles.container}>
        { this.state.connected && <div style={led} /> }
        <div style={styles.controlContainer}>
          <div style={styles.controlGroup}>
            <button
              style={[button.general, button.up ]}
              onClick={() => this.socket.emit("move", "up")}
            >
              Up
            </button>
            <button
              style={[button.general, button.down ]}
              onClick={() => this.socket.emit("move", "down")}
            >
              Down
            </button>
            <button
              style={button.general}
              onClick={() => this.socket.emit("turn", "left")}
            >
              RotateLeft
            </button>
            <button
              style={button.general}
              onClick={() => this.socket.emit("turn", "right")}
            >
              RotateRight
            </button>
          </div>
          <div style={styles.controlGroup}>
            <button
              style={[button.general, button.up]}
              onClick={() => this.socket.emit("move", "forward")}
            >
              Forward
            </button>
            <button
              style={[button.general, button.down]}
              onClick={() => this.socket.emit("move", "backward")}
            >
              Back
            </button>
            <button
              style={button.general}
              onClick={() => this.socket.emit("move", "left")}
            >
              Left
            </button>
            <button
              style={button.general}
              onClick={() => this.socket.emit("move", "right")}
            >
              Right
            </button>
          </div>
        </div>
        <button style={button.general} onClick={() => this.changeState() }>
          { this.state.inAir ? "Land" : "TakeOff" }
        </button>
      </div>
    );
  }
}

export default radium(DroneControl);

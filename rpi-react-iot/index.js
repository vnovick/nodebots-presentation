import React from "react";
import Raspi from "raspi-io";
import socketIoClient from 'socket.io-client';
import { AppRegistry, Board, Led, Button, Container } from "react-iot";

class App extends React.Component {

  state = {
    connected: false,
    inAir: false
  }


  componentDidMount() {
    this.socket = socketIoClient("http://localhost:3005");
    this.socket.on("connect", () => {
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
    return (
      <Container>
        { this.state.connected && <Led pin="P1-13" isOn={this.state.connected} /> }
        <Container>
          <Button pin="P1-24"
            name="up"
            isPullup
            onPress={() => this.socket.emit("move", "up") }
          />
          <Button pin="P1-16"
            name="down"
            isPullup
            onPress={() => this.socket.emit("move", "down") }
          />
          <Button pin="P1-21"
            name="turn left"
            isPullup
            onPress={() => this.socket.emit("turn", "left") }
          />
          <Button pin="P1-22"
            name="turn right"
            isPullup
            onPress={() => this.socket.emit("turn", "right") }
          />
        </Container>
        <Container>
          <Button pin="P1-19"
            name="forward"
            isPullup
            onPress={() => this.socket.emit("move", "forward") }
          />
          <Button pin="P1-18"
            name="back"
            isPullup
            onPress={() => this.socket.emit("move", "backward") }
          />
          <Button pin="P1-11"
            name="left"
            isPullup
            onPress={() => this.socket.emit("move", "left") }
          />
          <Button pin="P1-23"
            name="right"
            isPullup
            onPress={() => this.socket.emit("move", "right") }
          />
        </Container>
        <Button pin="P1-15"
          isPullup
          onPress={() => this.changeState() }
        />
      </Container>
    );
  }
}

class IoTApplication extends React.Component {

  render() {
    return (
      <Board config={{ io: new Raspi() }}>
        <App />
      </Board>
    );
  }
}

AppRegistry.registerComponent("IoTApplication", IoTApplication);

import React from "react";
import Raspi from "raspi-io";
import ReactIoT, {
  Board,
  Led,
  Button,
  Container
} from "react-iot";
import drone from "./drone";

function move(direction){
  drone.move({ direction });
  console.log("drone moving", direction);
}

function turn(direction){
  drone.turn({ direction});
  console.log("drone turning", direction);
}

class App extends React.Component {

  state = {
    connected: false,
    inAir: false
  }

  changeState() {
    if (!this.state.inAir) {
      this.setState({
        inAir: true
      })
      drone.takeoff();
      console.log("takeoff")
    } else {
      this.setState({
        inAir: false
      })
      drone.land();
      console.log("land")
    }
  }

  render() {
    return (
      <Container>
        <Led pin="P1-13" isOn={this.state.inAir} />
        <Container>
          <Button pin="P1-24"
            name="up"
            isPullup
            onPress={() => move("up") }
          />
          <Button pin="P1-16"
            name="down"
            isPullup
            onPress={() => move("down") }
          />
          <Button pin="P1-21"
            name="turn left"
            isPullup
            onPress={() => turn("left") }
          />
          <Button pin="P1-22"
            name="turn right"
            isPullup
            onPress={() => turn("right") }
          />
        </Container>
        <Container>
          <Button pin="P1-19"
            name="forward"
            isPullup
            onPress={() => move("forward") }
          />
          <Button pin="P1-18"
            name="back"
            isPullup
            onPress={() => move("backward") }
          />
          <Button pin="P1-11"
            name="left"
            isPullup
            onPress={() => move("left") }
          />
          <Button pin="P1-23"
            name="right"
            isPullup
            onPress={() => move("right") }
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

ReactIoT.render(
  <Board config={{ io: new Raspi() }}>
    <App />
  </Board>
);
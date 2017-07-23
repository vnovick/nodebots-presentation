/* eslint-disable */
import Raspi from "raspi-io";
import five from "johnny-five";
import drone from "./drone";

const board = new five.Board({
  io: new Raspi()
})

board.on("ready", function() {
  let inAir = false;
  const takeOffOrLandButton = new five.Button({
    pin: "P1-15",
    isPullup: true
  });

  takeOffOrLandButton.on("down", () => {
    console.log("Toggle in Air", inAir);
    if (!inAir) {
      drone.takeoff().then(function() {
        console.log("did take off!");
        inAir = true;
        });
    } else {
      drone.land().then(function(){
        console.log("landed");
        inAir = false;
      })
    }
  })
});

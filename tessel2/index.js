const Tessel = require("tessel-io");
const five = require("johnny-five");
const path = require('path');
const iot = require('aws-iot-device-sdk');
const board = new five.Board({
  io: new Tessel()
});

const device = iot.device({
  keyPath: path.join(__dirname, '/tessel2-nodebots.private.key'),
  certPath: path.join(__dirname, '/tessel2-nodebots.cert.pem'),
  caPath: path.join(__dirname, '/root-CA.crt'),
  clientId: 'arn:aws:iot:us-west-2:761986747323:thing/tessel2-nodebots',
  host: 'a3adozegdrgjox.iot.us-west-2.amazonaws.com'
});

board.on("ready", () => {
  const weatherMonitor = new five.Multi({
    controller: "BME280",
    pins: ["a0", "a1"]
  });

  weatherMonitor.on("change", function() {
    device.publish('weather', JSON.stringify({
      temperature: this.thermometer.celsius,
      barometer: this.barometer.pressure,
      altimeter: this.altimeter.meters,
      humidity: this.hygrometer.relativeHumidity
    }));
  });
});

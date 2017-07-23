/* eslint-disable */

import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import drone from './drone';

const app = express();
const server = http.Server(app);
const io = socketIo(server);

console.log("Started listening on port 3005");

server.listen(3005);

io.on("connection", (socket) => {

  socket.emit("connected");


  socket.on("takeoff", () => {
    console.log("takeoff");
    drone.takeoff()
      .then(function() {
        console.log("did take off!");
        socket.emit("didTakeoff");
      })
      .catch(function() {
        socket.emit('signalLow')
      });

  });

  socket.on("land", () => {
    console.log("land")
    drone.land()
      .then(function() {
        console.log("did land!");
        socket.emit("didLand");
      });
  });

  socket.on("move", (direction) => {
    console.log("move", direction)
    drone.move({ direction })
      .then(function() {
        console.log("done moving", direction);
      });

  });

  socket.on("turn", (direction) => {
    console.log("turn", direction)
    drone.turn({ direction })
      .then(function() {
        console.log("done rotating", direction);
      })


  });

  socket.on("up", () => {
    console.log("up")
    drone.up()
      .then(function() {
        console.log("moved up");
      })

  });

  socket.on("down", () => {
    console.log("down")
    drone.down()
      .then(function() {
        console.log("moved down");
      })
  });

  socket.on("emergency", () => {
    console.log("emergency")
    drone.emergency()
      .then(function() {
        console.log("emergency");
      })
  });
});

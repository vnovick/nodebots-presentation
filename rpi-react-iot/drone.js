/* eslint-disable */
const RollingSpider = require('rolling-spider');

const rollingSpider = new RollingSpider({
  uuid: 'Mambo_393726'
});

const promise = new Promise(function(resolve, reject) {

  console.log('connecting...');
  rollingSpider.connect(function() {
    console.log('setup...');
    rollingSpider.setup(function() {
      rollingSpider.flatTrim();
      rollingSpider.startPing();
      rollingSpider.flatTrim();

      rollingSpider.signalStrength(function (err, strength) {
        // if (err) throw err;
        console.log(`signal strength is: ${strength}`);
      });

      // Resolve promise
      resolve();

      console.log('listening...');
    });
  });

});

let action = promise;


const drone = (function() {


  function takeoff() {
    action = action.then(function() {
      return new Promise(function(resolve, reject) {
        rollingSpider.flatTrim(function() {
          rollingSpider.takeOff(function() {
            console.log('took off?');
          });
          resolve();

          console.log('hovering!');
        });


      });
    });

    return action;

  }

  function land() {
    action = action.then(function() {
      return new Promise(function(resolve, reject) {
        rollingSpider.land(function() {
          console.log('landed!');
          resolve();
        });


      });
    });

    return action;
  }


  function move({direction = 'up', speed = 60, steps = 2}) {
    action = action.then(function() {
      return new Promise(function(resolve, reject) {

        // Direction should be: `up`, `down`, `left`, or `right`
        rollingSpider[direction]({ speed, steps }, function() {
          resolve();
        });


      });
    });

    return action;

  }


  function turn({ direction = 'right', speed = 60, steps = 2 }) {
    action = action.then(function() {
      return new Promise(function(resolve, reject) {

        // Turning right or left?
        let methodName = (direction === 'right') ?
          'turnRight' : 'turnLeft';

        rollingSpider[methodName]({ speed, steps }, function() {
          console.log('turned!', direction);
          resolve();
        });

      });
    });

    return action;


  }


  function emergency() {
    action = action.then(function() {
      return new Promise(function(resolve, reject) {

        rollingSpider.emergency(function() {
          console.log('emergency!');
          resolve();
        });


      });
    });

    return action;

  }

  return {
    takeoff,
    land,
    move,
    turn,
    emergency
  };

})();

/**
 * Exports drone module
 */
module.exports = drone;

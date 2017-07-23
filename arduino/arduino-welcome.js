let five = require("johnny-five"),
  board, lcd;

board = new five.Board();

board.on("ready", function() {
  let buttonPressesCounter = 0;
  let text = [
    ["Ready for more", "cool examples?"],
    ["Buckle up and", "enjoy :check:"]
  ];

  button = new five.Button(2);
  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 0,
    rows: 2,
    cols: 20


    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  // Tell the LCD you will use these characters:
  lcd.useChar("check");
  lcd.useChar("heart");

  lcd.clear().print("Hello JS Israel");
  lcd.cursor(1, 0);

  // Line 2: I <3 johnny-five
  lcd.print("I :heart: johnny-five");


  button.on("down", function() {
      text[buttonPressesCounter] && text[buttonPressesCounter].forEach((textCaption, index) => {
        lcd.cursor(index, 0);
        if (!index) {
          lcd.clear();
        }
        lcd.print(textCaption);
      });
      buttonPressesCounter++;
  });

  this.repl.inject({
    lcd: lcd,
    button: button
  });
});

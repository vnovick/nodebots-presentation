// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Image,
  Deck,
  Heading,
  Link,
  ListItem,
  Appear,
  List,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import WebCam from "./components/webCam";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  jseverywhere: require("../assets/jseverywhere.png"),
  reactIcon: require("../assets/react-icon.png"),
  background: require("../assets/background.jpg"),
  backgroundStart: require("../assets/background_start.jpg"),
  codevalueLogo: require("../assets/codevalue-logo2.png"),
  iot: require("../assets/internetOfThings.jpg"),
  drone: require("../assets/drone.jpg"),
  johnnyFive: require("../assets/johnny-five-fb.png"),
  funnyRobot: require("../assets/funny_robot.jpg"),
  terminator: require("../assets/terminator.jpg"),
  cowboy: require("../assets/cowboyj.jpg"),
  support: require("../assets/support.png"),
  forget: require("../assets/forget.jpg"),
  ai: require("../assets/artificialintelligence.jpg"),
  agenda: require("../assets/agenda.jpg"),
  smarthome: require("../assets/smarthome.png"),
  iotarchitecture: require("../assets/iotarchitecture.png"),
  arduinowelcome: require("../assets/arduinowelcome.png"),
  joystick: require("../assets/joystick.png"),
  bme280: require("../assets/bme280.png"),
  tessel2: require("../assets/tessel2.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "white",
  tertiary: "white",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const slideProps = {
  transition: ["slide"],
  bgColor: "primary",
  bgImage: images.background,
  bgDarken: 0.5
};


export default class Presentation extends React.Component {

  render() {
    return (
      <Deck transition={["zoom"]} transitionDuration={500} theme={theme}>
        <Slide {...slideProps } bgImage={images.backgroundStart}>
          <Heading size={1} textColor="primary" caps>JavaScript Robotics</Heading>
        </Slide>
        <Slide {...slideProps } bgImage={images.ai}>
          <Heading size={3} textColor="primary" lineHeight={2} caps>Vladimir Novick</Heading>
          <Heading size={4} textColor="primary" caps>Software Architect & Consultant</Heading>
          <Image src={images.codevalueLogo} style={{ paddingTop: "2rem" }} />
        </Slide>
        <Slide {...slideProps } bgImage={images.agenda}>
          <Heading size={3} textColor="primary" lineHeight={2}>Agenda</Heading>
          <List>
            <Appear><ListItem>Inernet of things</ListItem></Appear>
            <Appear><ListItem>JavaScript Robotics with NodeBots</ListItem></Appear>
            <Appear><ListItem>Have fun with cool demos</ListItem></Appear>
          </List>
        </Slide>
        <Slide {...slideProps }>
          <Heading size={5} textColor="primary" caps>Internet of Things</Heading>
          <Image src={images.iot} />
        </Slide>
        <Slide {...slideProps }>
          <Image src={images.smarthome} />
        </Slide>
        <Slide {...slideProps }>
          <Heading size={5} textColor="primary" caps>IoT Architecture</Heading>
          <Image src={images.iotarchitecture} />
        </Slide>
        <Slide {...slideProps }>
          <Heading size={5} textColor="primary" caps>Robots... how it started</Heading>
          <Image style={{ width: "50vw" }} src={images.funnyRobot} />
        </Slide>
        <Slide {...slideProps }>
          <Heading size={5} textColor="primary" caps>Later in the future...</Heading>
          <Image style={{ width: "50vw" }} src={images.terminator} />
        </Slide>
        <Slide {...slideProps }>
          <Heading size={1} textColor="primary" lineHeight={2} caps>JavaScript is everywhere</Heading>
        </Slide>
        <Slide {...slideProps }>
          <Image src={images.jseverywhere} />
        </Slide>
        <Slide {...slideProps }>
          <Image style={{ width: "50vw" }} src={images.johnnyFive} />
        </Slide>
        <Slide {...slideProps }>
          <Image style={{ width: "50vw" }} src={images.cowboy} />
        </Slide>
        <Slide {...slideProps }>
          <Heading>Johnny Five</Heading>
          <List>
            <Appear><ListItem>Open Source JS robotics programming framework</ListItem></Appear>
            <Appear><ListItem>Uses Firmdata protocol for communicating with microcontrollers</ListItem></Appear>
            <Appear><ListItem>Created by Rick Waldron in 2012</ListItem></Appear>
            <Appear><ListItem>Maintained by huge community</ListItem></Appear>
            <Appear><ListItem>Support wide and constantly growing range of hardware MCUs and SoCs</ListItem></Appear>
          </List>
        </Slide>
        <Slide {...slideProps }>
          <Image style={{ width: "50vw" }} src={images.support} />
        </Slide>
        <Slide {...slideProps }>
          <Heading>Why?</Heading>
          <List>
            <Appear><ListItem>No need to write C code</ListItem></Appear>
            <Appear><ListItem>No Compiling</ListItem></Appear>
            <Appear><ListItem>Getting real time feedback from hdw</ListItem></Appear>
            <Appear><ListItem>JavaScript</ListItem></Appear>
          </List>
        </Slide>
        <Slide {...slideProps }>
          <Heading size={3} textColor="primary" caps>Let's start hacking</Heading>
          <WebCam />
        </Slide>
        <CodeSlide
          style={{ fontSize: "1.5rem" }}
          bgColor="secondary" textColor="primary" bgImage={images.background} bgDarken={.6}
          transition={"slide"}
          lang="js"
          code={require("raw-loader!./code-samples/arduino")}
          ranges={[
            { loc: [ 0, 2 ], title: "Arduino welcome" },
            { loc: [ 3, 5 ] },
            { loc: [ 5, 6 ] },
            { loc: [ 6, 12 ] },
            { loc: [ 12, 20 ] },
            { loc: [ 21, 24 ] },
            { loc: [ 24, 30 ] },
            { loc: [ 31, 43 ] },
            { loc: [ 44, 49 ] }
          ]}
        />
        <Slide {...slideProps }>
          <Image style={{ width: "50vw" }} src={images.arduinowelcome} />
        </Slide>
        <Slide {...slideProps }>
          <Heading size={5} textColor="primary" caps>Tessel2</Heading>
          <Link href="https://tessel.io/" target="_blank">
           <Image style={{ width: "50vw" }} src={images.tessel2} />
          </Link>
        </Slide>
        <Slide {...slideProps }>
          <Heading size={3} textColor="primary" caps>Connecting to the cloud</Heading>
          <WebCam />
        </Slide>
        <CodeSlide
          style={{ fontSize: "1.5rem" }}
          bgColor="secondary" textColor="primary" bgImage={images.background} bgDarken={.6}
          transition={"slide"}
          lang="js"
          code={require("raw-loader!./code-samples/tessel2")}
          ranges={[
            { loc: [ 0, 4 ], title: "Tessel2 weather station" },
            { loc: [ 4, 7 ] },
            { loc: [ 8, 16 ] },
            { loc: [ 16, 22 ] },
            { loc: [ 22, 30 ] }
          ]}
        />
        <Slide {...slideProps }>
          <Heading size={3} textColor="primary" caps>Drone Control demo</Heading>
          <img src={images.drone}/>
        </Slide>
        <Slide {...slideProps }>
          <WebCam />
        </Slide>
        <CodeSlide
          style={{ fontSize: "1.5rem" }}
          bgColor="secondary" textColor="primary" bgImage={images.background} bgDarken={.6}
          transition={"slide"}
          lang="js"
          code={require("raw-loader!./code-samples/rpi")}
          ranges={[
            { loc: [ 0, 4 ], title: "Raspberry Pi drone" },
            { loc: [ 4, 8 ] },
            { loc: [ 9, 14 ] },
            { loc: [ 14, 29 ] },
            { loc: [ 29, 38 ] },
            { loc: [ 39, 48 ] },
            { loc: [ 49, 58 ] },
            { loc: [ 60, 69 ] },
            { loc: [ 70, 78 ] },
            { loc: [ 78, 87 ] }
          ]}
        />
        <Slide {...slideProps }>
          <Heading size={1} textColor="primary" lineHeight={2} caps>react-iot</Heading>
          <Image style={{ width: "20vw" }} src={images.reactIcon} />
        </Slide>
        <Slide {...slideProps }>
          <Heading size={4} lineHeight={2} textColor="primary" caps>Combination of</Heading>
            <List>
              <Appear><ListItem>Johny Five</ListItem></Appear>
              <Appear><ListItem>React</ListItem></Appear>
              <Appear><ListItem>React Fiber custom renderer</ListItem></Appear>
            </List>
        </Slide>
        <Slide {...slideProps }>
          <Heading>Why react-iot?</Heading>
          <List>
            <Appear><ListItem>React ecosystem is used everywhere</ListItem></Appear>
            <Appear><ListItem>Using React way of thinking</ListItem></Appear>
            <Appear><ListItem>Portability from web app to IoT app</ListItem></Appear>
            <Appear><ListItem>Fun</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          style={{ fontSize: "1.5rem" }}
          bgColor="secondary" textColor="primary" bgImage={images.background} bgDarken={.6}
          transition={"slide"}
          lang="js"
          code={require("raw-loader!./code-samples/droneControlIoT")}
          ranges={[
            { loc: [ 0, 10 ], title: "Code walkthrough" },
            { loc: [ 10, 20 ] },
            { loc: [ 20, 27 ] },
            { loc: [ 27, 42 ] },
            { loc: [ 43, 48 ] },
            { loc: [ 48, 53 ] },
            { loc: [ 85, 97 ] },
            { loc: [ 100, 105 ] }
          ]}
        />
        <Slide {...slideProps }>
          <Heading size={3} textColor="primary" caps>And now on device</Heading>
          <WebCam />
        </Slide>
        <Slide {...slideProps }>
          <Heading size={3} textColor="primary" caps>So what is under the hood of React IoT.</Heading>
          <List>
            <Appear><ListItem>Custom React Fiber renderer</ListItem></Appear>
            <Appear><ListItem>Whole power of Johny Five framework</ListItem></Appear>
          </List>
        </Slide>
        <Slide {...slideProps }>
          <Heading size={3} textColor="primary" caps>react-iot roadmap</Heading>
          <List>
            <Appear><ListItem>Implement all of Johnny Five components</ListItem></Appear>
            <Appear><ListItem>Add connection providers to AWS IoT Platform, Azure IoT Hub and Google Cloud IoT</ListItem></Appear>
            <Appear><ListItem>Add Extensibility with middlewares and plugins</ListItem></Appear>
          </List>
        </Slide>
        <Slide {...slideProps }>
          <Heading textColor="primary" size={3}>Contribute to react-iot</Heading>
          <Heading lineHeight={4} textColor="primary" size={6}><Link textColor="primary" href="https://github.com/vnovick/react-iot">https://github.com/vnovick/react-iot</Link></Heading>
          <Heading lineHeight={3} textColor="primary" size={6}>Contact me</Heading>
          <Text><Link textColor="primary" style={{ fontSize: "2rem" }} size={6} href="vladjs.com">vnovick.com</Link></Text>
          <Text><Link textColor="primary" style={{ fontSize: "2rem" }} size={6} href="@VladimirNovick">@VladimirNovick</Link></Text>
        </Slide>
        <Slide {...slideProps }>
          <Heading size={3} lineHeight={3} textColor="primary">Thank you</Heading>
          <Text textColor="primary" lineHeight={2}>presentation repo:</Text>
          <Link textColor="primary" style={{ fontSize: "1.2rem" }} href="https://github.com/vnovick/nodebots-presentation">https://github.com/vnovick/nodebots-presentation</Link>
        </Slide>
      </Deck>
    );
  }
}

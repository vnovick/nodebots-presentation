# React IoT presentation

## Folder structure

- **presentation** folder- presentation slides Deck
  - **components/droneControl.js** - drone control component
- **server** folder - drone server
- **iot** folder - folder to copy to raspberry pi



## Run presentation

`npm start`;


## Run drone server

`npm run run-drone-server`


## Porting to Raspberry pi

- Copy server folder and iot folders to your Pi.
- `npm install` in each folder
- `npm start` in iot folder.
- `npm start` in server folder while drone powered up. When connected, Led on P1-13 will turn on.

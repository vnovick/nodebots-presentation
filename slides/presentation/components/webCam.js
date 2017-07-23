import React from "react";

export default class WebCam extends React.Component {
  componentDidMount() {
    const video = this.video;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }
  }

  render() {
    return (
      <video ref={(component) => (this.video = component) } id="video" width="100%" height="100%" autoPlay/>
    );
  }
}

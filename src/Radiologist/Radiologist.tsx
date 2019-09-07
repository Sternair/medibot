import React from "react";
import "./Radiologist.css";

class Radiologist extends React.Component {
  render() {
    console.log("SimpleCounter render call!");

    return (
      <div className="Radiologist">
        <h1>Termine MRI</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=medibot.techfest%40gmail.com&ctz=Europe%2FBerlin"
          style={{ height: "80vh", width: "80vw" }}
          title="radiology calendar"
        ></iframe>
      </div>
    );
  }
}

export default Radiologist;

// Google API key AIzaSyBSBqHw-J0Q2AJnt3l2KI2fR0mRd-TVtWo
// Google client ID: 322806710129-4185ksb62m2f50in2dkdoqo3k3hva6do.apps.googleusercontent.com
// Google client secret: RaiOOfgR3xlZ3SuXc0soID9Z

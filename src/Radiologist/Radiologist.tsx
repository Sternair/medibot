import React from "react";
import "./Radiologist.css";
//import ApiCalendar from "react-google-calendar-api/ApiCalendar";

class Radiologist extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0
    };

    console.log("Constructor!");
  }

  componentDidMount() {
    console.log("Component has mounted!");
  }

  render() {
    console.log("SimpleCounter render call!");

    return (
      <div className="Radiologist">
        <h1 style={{ color: "red" }}>Radiologist</h1>
      </div>
    );
  }
}

export default Radiologist;

// Google API key AIzaSyBSBqHw-J0Q2AJnt3l2KI2fR0mRd-TVtWo
// Google client ID: 322806710129-4185ksb62m2f50in2dkdoqo3k3hva6do.apps.googleusercontent.com
// Google client secret: RaiOOfgR3xlZ3SuXc0soID9Z

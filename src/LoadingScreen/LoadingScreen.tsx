import React from "react";
import logo from "../assets/medibot.gif";
import "./LoadingScreen.css";

class LoadingScreen extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <img src={logo} className="loading-screen" />
      </div>
    );
  }
}

export default LoadingScreen;

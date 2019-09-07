import React from "react";
import logo from "../assets/medibot.gif";
import "./LoadingScreen.css";

class LoadingScreen extends React.Component<{}, { isLoading: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true
    };
    this.terminateLoading = this.terminateLoading.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.terminateLoading(), 2000);
  }

  terminateLoading() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
          <img src={logo} className="loading-screen" alt="Loading"/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default LoadingScreen;

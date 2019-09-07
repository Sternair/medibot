import React from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

class Patient extends React.Component<{}, { isLoading: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true
    };
    this.terminateLoading = this.terminateLoading.bind(this);
  }
  componentDidMount() {
    //setTimeout(() => this.terminateLoading(), 2000);
  }

  terminateLoading() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <LoadingScreen />
        </div>
      );
    } else {
      return (
        <div className="App">
          <iframe
            title="MediBot"
            src="https://webchat.snatchbot.me/225c7fcc7f456262ffe0a5d00367c1f64c13bd35cf772244194dc75d7928db01"
            style={{ height: "80vh", width: "100vw", border: "none" }}
          />
          <div
            style={{
              height: "30px",
              width: "100vw",
              background: "white",
              transform: "translateY(-100%)"
            }}
          ></div>
        </div>
      );
    }
  }
}

export default Patient;

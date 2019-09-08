import React from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

class Patient extends React.Component {
  render() {
    return (
      <div className="App">
        <LoadingScreen />
        <iframe
          title="MediBot"
          src="https://webchat.snatchbot.me/225c7fcc7f456262ffe0a5d00367c1f64c13bd35cf772244194dc75d7928db01"
          style={{ height: "90vh", width: "100vw", border: "none" , left: "0"}}
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

export default Patient;

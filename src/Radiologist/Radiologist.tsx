import React from "react";

class Radiologist extends React.Component {
  render() {
    if (5 > 3) {
      return <p>Hi</p>;
    } else {
      return (
        <div>
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
}

export default Radiologist;

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");
const functions = require("firebase-functions");

const googleCredentials = require("./credentials.json");

const ERROR_RESPONSE = {
  status: "500",
  message: "There was an error adding an event to your Google calendar"
};
const TIME_ZONE = "CET";

import firebase from '../firebase/app'
import firebaseConfig from '../firebase-config'

firebase.initializeApp(firebaseConfig)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.schedule = functions.https.onRequest((request, response) => {
    console.log(request.body);
    var user_id = request.body.user_id;
    var bot_id = request.body.bot_id;
    var module_id = request.body.module_id;
    var user_id = request.body.user_id;
    response.send({
        "user_id": user_id,
        "bot_id": bot_id,
        "module_id": module_id,
        "message": "Reservation is made. Our registrar will contact you as soon as possible to book the appointment. Learn more about your examination and radiology on our website."
    });
    enterAppointment("MRI for Mr. Mustermann", 100);
});

exports.patientFind = functions.https.onRequest((request, response) => {
    var msg = request.body.incoming_message;
    if (msg=="007") {
        response.send({
            "message": "Hello, James Bond! We learned from your General Practitioner that you need a chest MRI. Let's find the best slot for you  & reduce your waiting time for the appointment. Is it OK for you? / Would you like to continue?",
            "suggested_replies": ["Yes", "I'd rather call"]
        });
    }
    else {
        response.send({
            "message": "Sorry, could not find this Patient Id, please try again"
        });
    }

});

exports.addStaticEventToCalendar = functions.https.onRequest(
  (request, response) => {
    const eventData = {
      eventName: "Firebase Event",
      description: "This is a sample description",
      startTime: "2019-09-09T10:00:00",
      endTime: "2019-09-09T13:00:00"
    };
    const oAuth2Client = new OAuth2(
      googleCredentials.web.client_id,
      googleCredentials.web.client_secret,
      googleCredentials.web.redirect_uris[0]
    );

    oAuth2Client.setCredentials({
      refresh_token: googleCredentials.refresh_token
    });

    addEvent(eventData, oAuth2Client)
      .then(data => {
        response.status(200).send(data);
        return;
      })
      .catch(err => {
        console.error("Error adding event: " + err.message);
        response.status(500).send(ERROR_RESPONSE);
        return;
      });
  }
);

function addEventToCalendar(title, description, startTime, endTime) {
  /* 
title: "Title",
description: "This is a sample description",
startTime: "2019-09-09T10:00:00",
endTime: "2019-09-09T13:00:00"
*/
  const eventData = {
    eventName: title,
    description: description,
    startTime: startTime,
    endTime: endTime
  };
  const oAuth2Client = new OAuth2(
    googleCredentials.web.client_id,
    googleCredentials.web.client_secret,
    googleCredentials.web.redirect_uris[0]
  );

  oAuth2Client.setCredentials({
    refresh_token: googleCredentials.refresh_token
  });

  addEvent(eventData, oAuth2Client)
    .then(data => {
      response.status(200).send(data);
      return;
    })
    .catch(err => {
      console.error("Error adding event: " + err.message);
      response.status(500).send(ERROR_RESPONSE);
      return;
    });
}

function addEvent(event, auth) {
  return new Promise(function(resolve, reject) {
    calendar.events.insert(
      {
        auth: auth,
        calendarId: "primary",
        resource: {
          summary: event.eventName,
          description: event.description,
          start: {
            dateTime: event.startTime,
            timeZone: TIME_ZONE
          },
          end: {
            dateTime: event.endTime,
            timeZone: TIME_ZONE
          }
        }
      },
      (err, res) => {
        if (err) {
          console.log("Rejecting because of error");
          reject(err);
        }
        console.log("Request successful");
        resolve(res.data);
      }
    );
  });
}

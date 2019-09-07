/* eslint-disable */
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");
const functions = require("firebase-functions");

const googleCredentials = require("./credentials.json");

const ERROR_RESPONSE = {
    status: "500",
    message: "There was an error adding an event to your Google calendar"
};
const TIME_ZONE = "CET";


exports.suggestHospital = functions.https.onRequest((request, response) => {
    console.log(request.body);
    var timeArray = ["10:00", "10:40", "11:20", "11:35", "12:00", "13:00"];
    var dateArray = ["09 September 2019", "10 September 2019-09-10", "11 September 2019", "12 September 2019", "15 September 2019", "16 September 2019"];
    var hospitalArray = ["Klinikum Harlaching", "Radiology Munich South West", "Hospital of the University of Munich", "Kinderklinik, Poliklinik",
"Radiologie, Nuklearmedizin", "Conradia Radiologie & Medical Prevention", "German Heart Centre Munich", "Red Cross Hospital", "medneo Group",
"Dr. Matthias Lampe"];
    const firstNames = ["Mrs. Laura", "Mrs. Susan", "Mrs. Sabrina", "Mrs. Johanna", "Mr. Andreas", "Mr. Michael", "Mr. Sebastian"];
    const lastNames = ["Jones", "Huber", "Miller", "Mayer", "Untergruber", "Oberhuber"]
    var name = getRandomElement(firstNames) + " " +getRandomElement(lastNames);
    var type = "MRI "
    var title = "Appointment " + type + name;
    var time = timeArray[Math.floor(Math.random() * timeArray.length)];
    var date = dateArray[Math.floor(Math.random() * dateArray.length)];
    var description = "";
    var startTime = date + "T" + time;
    var endTime = date + "T" + time;
    addEventToCalendar(title, description, startTime, endTime);
    var msg = "We have this available slots for you:";
    for(i=1;i<4;i++) {
        msg += "\r\n" + i+") " + getRandomElement(hospitalArray) + " " + date + " at " + time;
    }
    msg += "\r\nPlease choose the best option for you?";
    response.send({
        "message": msg,
        "suggested_replies": ["1", "2", "3", "Another one"]
    });
});

exports.schedule = functions.https.onRequest((request, response) => {
    console.log(request.body);
    var timeArray = ["10:00:00", "10:40:00", "11:20:00", "11:35:00", "12:00:00", "13:00:00"];
    var dateArray = ["2019-09-09", "2019-09-10", "2019-09-11"];
    const firstNames = ["Mrs. Laura", "Mrs. Susan", "Mrs. Sabrina", "Mrs. Johanna", "Mr. Andreas", "Mr. Michael", "Mr. Sebastian"];
    const lastNames = ["Jones", "Huber", "Miller", "Mayer", "Untergruber", "Oberhuber"]
    var name = getRandomElement(firstNames) + " " +getRandomElement(lastNames);
    var type = "MRI "
    var title = "Appointment " + type + name;
    var time = timeArray[Math.floor(Math.random() * timeArray.length)];
    var date = dateArray[Math.floor(Math.random() * dateArray.length)];
    var description = "";
    var startTime = date + "T" + time;
    var endTime = date + "T" + time;
    addEventToCalendar(title, description, startTime, endTime);
    var msg = "Thank you! Based on your responses, we can schedule your appointment for the " + date + " at " + time + ". Is that okay with you?"
    response.send({
        "message": msg
    });
});


exports.patientFind = functions.https.onRequest((request, response) => {
    var msg = request.body.incoming_message;
    if (msg == "007") {
        response.send({
            "message": "Hello, James Bond! We learned from your General Practitioner that you need a chest MRI. Let's find the best slot for you  & reduce your waiting time for the appointment. Is it OK for you? / Would you like to continue?",
            "suggested_replies": ["Yes", "I'd rather call"]
        });
    } else {
        response.send({
            "message": "Sorry, could not find this Patient Id, please try again"
        });
    }

});

exports.initialGreeting = functions.https.onRequest((request, response) => {
    const firstNames = ["Mrs. Laura", "Mrs. Susan", "Mrs. Sabrina", "Mrs. Johanna", "Mr. Andreas", "Mr. Michael", "Mr. Sebastian"];
    const lastNames = ["Jones", "Huber", "Miller", "Mayer", "Untergruber", "Oberhuber"]
    const treatments = ["chest MRT", "arm X-ray", "stomach ultra sound"]

    response.send({
        "message": `Hello ${getRandomElement(firstNames)} ${getRandomElement(lastNames)}! Thank you for uploading your referral slip. We will now guide you through the process of finding an ideal appointment for your ${getRandomElement(treatments)}.`,
        "suggested_replies": ["Continue", "I want to talk to a person"]
    })
});

function getRandomElement(array) { return array[Math.floor(Math.random() * array.length)]}

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
    return new Promise(function (resolve, reject) {
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

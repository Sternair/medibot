const functions = require('firebase-functions');

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

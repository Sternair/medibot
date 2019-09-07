const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.schedule = functions.https.onRequest((request, response) => {
    console.log(request.body.variables);
  response.send("Hello from Firebase Schedule!");
});

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
 
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");

admin.initializeApp();
const corsHandler = cors({ origin: true });

exports.helloWorld = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    console.log("Function executed successfully");
    res.status(200).send("Hello from Firebase Functions!");
  });
});


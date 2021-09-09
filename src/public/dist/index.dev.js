"use strict";

var _app = require("../firebase/app");

var _firestore = require("../firebase/firestore");

var firebaseApp = (0, _app.initializeApp)({
  apiKey: "AIzaSyDyANMdWKIXdgP0qRutnAq8G4mOU_k75-E",
  authDomain: "covid-test-fbfda.firebaseapp.com",
  projectId: "covid-test-fbfda",
  storageBucket: "covid-test-fbfda.appspot.com",
  messagingSenderId: "471597847358",
  appId: "1:471597847358:web:42d48b24cd6403b8ded26f",
  measurementId: "G-FD0J6WVTRQ"
});
var db = (0, _firestore.getFirestore)(firebaseApp);
console.log(db);
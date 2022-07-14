var config = {
    apiKey: "AIzaSyBCLcEoVKqDfDXxeMxOvPeXAb9A4PA53fw",
    authDomain: "helping-panda.firebaseapp.com",
    databaseURL: "https://helping-panda.firebaseio.com",
    projectId: "helping-panda",
    storageBucket: "helping-panda.appspot.com",
    messagingSenderId: "546878085356",
    appId: "1:546878085356:web:dad9843ec075ac0f41adc9",
    measurementId: "G-DN8V0MNE82"
};

//initialize your firebase
firebase.initializeApp(config);
const auth = firebase.auth();
const database = firebase.database();

var Campaigns = database.ref().child('Campaigns/');

Campaigns.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
  console.log(snapshot.val())
});
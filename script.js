// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration object
     apiKey: "AIzaSyDM_zHgMRCfP4tWtVB53Eg_NULnwX4SPsI",
    authDomain: "reid-4aba0.firebaseapp.com",
    databaseURL: "https://reid-4aba0-default-rtdb.firebaseio.com",
    projectId: "reid-4aba0",
    storageBucket: "reid-4aba0.appspot.com",
    messagingSenderId: "931979571986",
    appId: "1:931979571986:web:8c1c0659d57788c453f9cb"
};
firebase.initializeApp(firebaseConfig);
// Get reference to the RFID IDs node in Firebase

var countRef = firebase.database().ref("rfid-count");

// Function to add RFID ID to Firebase
function addRFID() {
 var rfidId = document.getElementById("rfidId").value;

      // Create a new reference to the RFID ID node in Firebase
      var rfidIdRef = database.ref("rfid_ids/" + rfidId);

      // Set the value of the RFID ID node
      rfidIdRef.set(rfidId);

      // Clear the RFID ID input field
      document.getElementById("rfidId").value = "";

    // Update the count in Firebase
    incrementCount();
  
}

// Function to increment the count in Firebase
function incrementCount() {
  countRef.transaction(function (currentCount) {
    return (currentCount || 0) + 1;
  });
}

// Listen for changes in the count and update the UI
countRef.on("value", function (snapshot) {
  var countElement = document.getElementById("count");
  countElement.textContent = snapshot.val();
});
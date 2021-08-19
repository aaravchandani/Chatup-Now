
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCvry7oceY6yfGlAzMv1teBdlH2-4dmU3A",
      authDomain: "kwitter-d5531.firebaseapp.com",
      projectId: "kwitter-d5531",
      storageBucket: "kwitter-d5531.appspot.com",
      messagingSenderId: "926447229704",
      appId: "1:926447229704:web:15e430e28f5238cef6aabd",
      measurementId: "G-C7J5LXY298"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics()
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

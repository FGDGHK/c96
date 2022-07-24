//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
      apiKey: "AIzaSyCsXoryvQLO6wKJkXv20Co1ak7_xEZux6c",
      authDomain: "kwitter-c57aa.firebaseapp.com",
      projectId: "kwitter-c57aa",
      storageBucket: "kwitter-c57aa.appspot.com",
      messagingSenderId: "244398625207",
      appId: "1:244398625207:web:06c7127c8f0b7eb3e09832"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + username;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      }; });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });

      document.getElementById("msg").value = "";
}

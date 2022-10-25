// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC2JyUopJEBO4fZ7CG3leLZbNyBwaVKmAE",
    authDomain: "lets-chat-web-app-9bc8c.firebaseapp.com",
    projectId: "lets-chat-web-app-9bc8c",
    storageBucket: "lets-chat-web-app-9bc8c.appspot.com",
    messagingSenderId: "340746824289",
    appId: "1:340746824289:web:55d5f5a0abd91ceeea5820",
    measurementId: "G-3PWRPZ0DQQ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
   
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




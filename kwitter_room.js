var firebaseConfig = {
      apiKey: "AIzaSyDjbjBmiM2cqYDgO72YbkjXrbndrXewO80",
      authDomain: "kwitter-c3e85.firebaseapp.com",
      databaseURL: "https://kwitter-c3e85-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3e85",
      storageBucket: "kwitter-c3e85.appspot.com",
      messagingSenderId: "716766584027",
      appId: "1:716766584027:web:49a354113c8492d35740fe"
    };
    
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+" ! "
 function addRoom()
 {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpuse:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";      
}
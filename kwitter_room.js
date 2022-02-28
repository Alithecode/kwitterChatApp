
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyANaFU2pUFJjqbUXxE9kQjBfNvHTuYTLto",
      authDomain: "kwitter-ca5d4.firebaseapp.com",
      databaseURL: "https://kwitter-ca5d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-ca5d4",
      storageBucket: "kwitter-ca5d4.appspot.com",
      messagingSenderId: "704964639802",
      appId: "1:704964639802:web:34b820294d8e51e4c70903"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    
     user_name =  localStorage.getItem("user_name")

     document.getElementById("user_name").innerHTML = "welcome " + user_name+" !";

     function addRoom(){
           room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            })
            localStorage.setItem("room_name", room_name);

            window.location ="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class = 'room_name' id='"+Room_names+ "' onclick = 'redirectToRoomname(this.id)'>#" +Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomname(names){
      console.log(names);
      localStorage.setItem("room_name", names)
      window.location = "kwitter_page.html";
}
function logout (){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter_page.html"
}
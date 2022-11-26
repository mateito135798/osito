//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyBidAEGvMse9kBgKy-CD9XJzQ4zRMQ5Noc",
      authDomain: "hombre-dc0c2.firebaseapp.com",
      databaseURL: "https://hombre-dc0c2-default-rtdb.firebaseio.com",
      projectId: "hombre-dc0c2",

      storageBucket: "hombre-dc0c2.appspot.com",
      messagingSenderId: "592908258735",
      appId: "1:592908258735:web:da4a2fd01fcca348c7f35a"
    };    
firebase.initializeApp(firebaseConfig);
var user=localStorage.getItem("user");
var hangoutRooms=localStorage.getItem("room");
function enviar() {
var message=document.getElementById("msg").value;
firebase.database().ref(hangoutRooms).push({
      name:user,
      mensaje:message,
      like:0

});
document.getElementById("msg").value="";     
}



function getData() { firebase.database().ref("/"+hangoutRooms).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData; 
//Inica código
var name=message_data['name'];
var mensaje=message_data['mensaje'];
var like=message_data['like'];
  var RC="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
  var GM="<h4 class='message_h4'>"+mensaje+"</h4>";
  var Bl="<button class=' btn btn-info' id="+firebase_message_id+"value="+like+"onclick='L(this.id)'>";
  var laik="<span><img src='laik.png'class='user_tick'>laik:"+like+"</span></button><hr>";
  var E=RC+GM+Bl+laik;
  document.getElementById("output").innerHTML=E;

  //Termina código
      } });  }); }
getData();
function L(message_id) {
      button_id=message_id;
      var likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(hangoutRooms).child(message_id).update({
            like:updated_likes
      })
      
}
function back() {
      window.location="index.html";
      localStorage.removeItem("user");
      localStorage.removeItem("room");
      
   }  
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
document.getElementById("t").innerHTML="hola "+user;

function añadir() {
var Room=document.getElementById("f").value;
localStorage.setItem("room",Room);
firebase.database().ref("/").child(Room).update({
sala:"nueva"
});



      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
var lenguis="<div class='room_name' id="+Room_names+" onclick='transporte_publico(this.id)'>😎"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=lenguis
      //Final del código
   
   });});}
getData();

//LLENAR FUNCION ABAJO NO ELIMINAR PORQUE SE QUE SE ME VA A OLVIDAR AUN CON EL RECORDATORIO POR QUE ESTA MUY LARGO :>
//|
function volver() {
      window.location="index.html"
      localStorage.removeItem("user");
      localStorage.removeItem("room");
   }                 
//|
function transporte_publico(name){
console.log(name);
localStorage.setItem("sala",name);
window.location.replace("kwitter_page.html");
}
//|
//|
//|
//v

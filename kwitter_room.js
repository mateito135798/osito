var firebaseConfig = {
      apiKey: "AIzaSyBidAEGvMse9kBgKy-CD9XJzQ4zRMQ5Noc",
      authDomain: "hombre-dc0c2.firebaseapp.com",
      databaseURL: "https://hombre-dc0c2-default-rtdb.firebaseio.com",
      projectId: "hombre-dc0c2",
      storageBucket: "hombre-dc0c2.appspot.com",
      messagingSenderId: "592908258735",
      appId: "1:592908258735:web:da4a2fd01fcca348c7f35a"
    };    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();

//LLENAR FUNCION ABAJO NO ELIMINAR PORQUE SE QUE SE ME VA A OLVIDAR AUN CON EL RECORDATORIO POR QUE ESTA MUY LARGO :>
function añadir() {
      
}


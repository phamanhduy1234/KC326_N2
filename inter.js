 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
   apiKey: "AIzaSyCHtTfRK1Yj3qz8dZULRR2zDfl8Jj5saGE",
  authDomain: "kc236-ef1da.firebaseapp.com",
  databaseURL: "https://kc236-ef1da-default-rtdb.firebaseio.com",
  projectId: "kc236-ef1da",
  storageBucket: "kc236-ef1da.appspot.com",
  messagingSenderId: "363953326320",
  appId: "1:363953326320:web:71808c1a3c7f1f7e0dda35"
  };
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  var database = firebase.database();

    //Den 01
    var btnOn = document.getElementById("btnOnId");
    var btnOff = document.getElementById("btnOffId");

    btnOn.onclick = function(){
      document.getElementById("den1").src = "ledon.png"
      database.ref("/IOT").update({
        "led": 1
      });
    }
    btnOff.onclick = function(){
      document.getElementById("den1").src = "ledoff.png"
      database.ref("/IOT").update({
        "led": 0
      });
    }
//----------------------
    //TV 01
    var btnOnTV = document.getElementById("btnOnId_TV");
    var btnOffTV = document.getElementById("btnOffId_TV");

    btnOnTV.onclick = function(){
      document.getElementById("TV1").src = "tv2.png"
      database.ref("/IOT").update({
        "led1": 1
      });
    }
    btnOffTV.onclick = function(){
      document.getElementById("TV1").src = "tv1.png"
      database.ref("/IOT").update({
        "led1": 0
      });
    }
//----------------------
    //AIR 01
    var btnOnAIR = document.getElementById("btnOnId_AIR");
    var btnOffAIR = document.getElementById("btnOffId_AIR");

    btnOnAIR.onclick = function(){
      document.getElementById("AIR1").src = "air2.png"
      database.ref("/IOT").update({
        "quat": 1
      });
    }
    btnOffAIR.onclick = function(){
      document.getElementById("AIR1").src = "air1.png"
      database.ref("/IOT").update({
        "quat": 0
      });
    }
//----------------------
database.ref("/IOT/Temp").on("value", function(snapshot){
  var temp = snapshot.val();
  document.getElementById("nhietdo").innerHTML = temp;
});
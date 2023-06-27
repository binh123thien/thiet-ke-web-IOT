const firebaseConfig = {
    apiKey: "AIzaSyDP4j2Pv1eztDg0-4W02DK9biCxsgrv2LY",
    authDomain: "ttiot-db293.firebaseapp.com",
    databaseURL: "https://ttiot-db293-default-rtdb.firebaseio.com",
    projectId: "ttiot-db293",
    storageBucket: "ttiot-db293.appspot.com",
    messagingSenderId: "1034306018053",
    appId: "1:1034306018053:web:c929a2530a01ba90c4356c",
    measurementId: "G-3J8V6RWMTE",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  var database = firebase.database();

  var btnON0 = document.getElementById("btnOnId_0");
  var btnOFF0 = document.getElementById("btnOffId_0");
  btnON0.onclick = function () {
      database.ref("/Kho").update({
        Pass: "ON"
      });
    };
  btnOFF0.onclick = function () {
      database.ref("/Kho").update({
        Pass: "OFF"
      });
    };
  //update image Cua
  database.ref("/Kho/Pass").on("value", function (snapshot) {
      var ss = snapshot.val();
      if (ss == "ON")
        document.getElementById("door_block").src="open.png";
      else
        document.getElementById("door_block").src="block.webp";
    });


var btnON = document.getElementById("btnOnId_1");
var btnOFF = document.getElementById("btnOffId_1");


btnON.onclick = function () {
    database.ref("/BanHang").update({
      Tivi: "ON"
    });
  };

btnOFF.onclick = function () {
    database.ref("/BanHang").update({
      Tivi: "OFF"
    });
  };

//update image Den
database.ref("/BanHang/Tivi").on("value", function (snapshot) {
    var ss = snapshot.val();
    if (ss == "ON")
      document.getElementById("TV_off").src="TV_on.png";
    else
      document.getElementById("TV_off").src="TV_off.png";
  });



  
  var btnON2 = document.getElementById("btnOnId_2");
  var btnOFF2 = document.getElementById("btnOffId_2");

btnON2.onclick = function () {
    database.ref("/BanHang").update({
      Tulanh: "ON"
    });
  };

btnOFF2.onclick = function () {
    database.ref("/BanHang").update({
      Tulanh: "OFF"
    });
  };

//update image Tu lanh
database.ref("/BanHang/Tulanh").on("value", function (snapshot) {
    var a = snapshot.val();
    if (a == "ON")
      document.getElementById("refri_off").src="refrigerator_on.png";
    else
      document.getElementById("refri_off").src="refrigerator_off.png";
  });



  var btnON3 = document.getElementById("btnOnId_3");
  var btnOFF3 = document.getElementById("btnOffId_3");

btnON3.onclick = function () {
    database.ref("/ThuNgan").update({
      Cam: "ON"
    });
  };

btnOFF3.onclick = function () {
    database.ref("/ThuNgan").update({
      Cam: "OFF"
    });
  };

//update image Cam
database.ref("/ThuNgan/Cam").on("value", function (snapshot) {
    var a = snapshot.val();
    if (a == "ON")
      document.getElementById("cam_off").src="cam_on.png";
    else
      document.getElementById("cam_off").src="cam_off.png";
  });





  var btnON4 = document.getElementById("btnOnId_4");
  var btnOFF4 = document.getElementById("btnOffId_4");

btnON4.onclick = function () {
    database.ref("/ThuNgan").update({
      Bulb: "ON"
    });
  };

btnOFF4.onclick = function () {
    database.ref("/ThuNgan").update({
      Bulb: "OFF"
    });
  };

//update image Cam
database.ref("/ThuNgan/Bulb").on("value", function (snapshot) {
    var a = snapshot.val();
    if (a == "ON")
      document.getElementById("bulb_off").src="lightbulb_on.png";
    else
      document.getElementById("bulb_off").src="lightbulb_off.png";
  });
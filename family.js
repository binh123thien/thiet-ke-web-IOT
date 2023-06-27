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
  

var nhietDo = document.getElementById("Nhietdo");
var dbRef = firebase.database().ref().child('info/TPHCM/Nhietdo');
dbRef.on('value', snap => nhietDo.innerText = "Hiển thị nhiệt độ: " + snap.val()+ "°C");

var doAm = document.getElementById("Doam");
var dbRef = firebase.database().ref().child('info/TPHCM/Doam');
dbRef.on('value', snap => doAm.innerText = "Hiển thị độ ẩm: " + snap.val()+ "%");


var thoiTiet = document.getElementById("thoitiet");
var dbRef = firebase.database().ref().child('info/TPHCM/thoitiet');
dbRef.on('value', snap => thoiTiet.innerText = "Khả năng có mưa: " + snap.val()+ "°C");

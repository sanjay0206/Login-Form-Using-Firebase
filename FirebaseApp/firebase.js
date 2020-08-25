// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyD1ttF-Blf-slZk7QbsGtWzWbW0vKqVhAA",
    authDomain: "login-form-35bfb.firebaseapp.com",
    databaseURL: "https://login-form-35bfb.firebaseio.com",
    projectId: "login-form-35bfb",
    storageBucket: "login-form-35bfb.appspot.com",
    messagingSenderId: "299672928059",
    appId: "1:299672928059:web:c9a77438fb5d9e9618c11e",
    measurementId: "G-P6PXC1GHR1"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function register(){
    var fn = document.getElementById("fn");
    var ln = document.getElementById("ln");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
     
      

      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));
      alert("You have registered successfully !");

  }
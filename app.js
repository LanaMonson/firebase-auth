(function() {

  //INITIALIZE FIREBASE
  //create a project in firebase
  //copy all the info below from project
  var config = {
    apiKey: "AIzaSyA9NFlOGDn5k3K8t8yKHQjBhLCW4k88LbY",
    authDomain: "authentic2703.firebaseapp.com",
    databaseURL: "https://authentic2703.firebaseio.com",
    projectId: "authentic2703",
    storageBucket: "authentic2703.appspot.com",
    messagingSenderId: "752085827467"
  };
  firebase.initializeApp(config);


  //GET ELEMENTS
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  //ADD LOGIN EVENT
  bthLogin.addEventistener('click', e => {
      //GET EMAIL AND PASS
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      //SIGN IN
      const promise = auth.signInWithEmailAndPassword(email. pass);
      promise.catch(e => console.log(e.message));
  });
  
  //ADD SIGNUP EVENT
  btnSignUp.addEventListener('click', e => {
    //GET EMAIL AND PASS
    //TODO: CHECK FOR REAL EMAIL
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //SIGN IN
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

} ());

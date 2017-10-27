//INITIALIZE FIREBASE

export default () => {
    var config = {
      apiKey: "AIzaSyDYOAbO_JJ9bY9y2OOOkckrTo8Fm4d2Mbo",
      authDomain: "project-1-4706d.firebaseapp.com",
      databaseURL: "https://project-1-4706d.firebaseio.com",
      projectId: "project-1-4706d",
      storageBucket: "project-1-4706d.appspot.com",
      messagingSenderId: "980953709117"
    };
    
    firebase.initializeApp(config);
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        store.dispatch(login(user));
      } else {
        store.dispatch(logout());
      }
    });
}


import * as firebase from "firebase";

//INITIALIZE FIREBASE
var config = {
  apiKey: "AIzaSyDYOAbO_JJ9bY9y2OOOkckrTo8Fm4d2Mbo",
  authDomain: "project-1-4706d.firebaseapp.com",
  databaseURL: "https://project-1-4706d.firebaseio.com",
  projectId: "project-1-4706d",
  storageBucket: "project-1-4706d.appspot.com",
  messagingSenderId: "980953709117"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

export const getUser = id => {
  return new Promise((resolve, reject) => {
    firebaseDB
      .ref(`/users/${id}`)
      .once("value")
      .then(snapshot => {
        resolve({
          ...snapshot.val(),
          id
        });
      })
      .catch(error => {
        console.log(error);
      });
  });
};

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    firebaseDB
      .ref(`/users`)
      .once("value")
      .then(snapshot => {
        console.log("test", snapshot.val());
      })
      .catch(error => {
        console.log(error);
      });
  });
};

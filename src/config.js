export const configFirebase = () => {
  const config = {
    apiKey: "AIzaSyCL1lY0oZOqwp0T9XeFdqV2bHEH8_LjUI8",
    authDomain: "empowomentech.firebaseapp.com",
    databaseURL: "https://empowomentech.firebaseio.com",
    projectId: "empowomentech",
    storageBucket: "empowomentech.appspot.com",
    // messagingSenderId: "451645465522"
  }; 
  firebase.initializeApp(config);
};
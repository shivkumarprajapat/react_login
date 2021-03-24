import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCYRh7piAMpSd1rMVxeuZKjuIYhZpWkS4c",
  authDomain: "login-2d521.firebaseapp.com",
  projectId: "login-2d521",
  storageBucket: "login-2d521.appspot.com",
  messagingSenderId: "359667360686",
  appId: "1:359667360686:web:95186d92ecbac15b845e3f"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
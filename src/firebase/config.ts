import firebase from 'firebase/app'
import 'firebase/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyCD3MMF9aRiacV0uOvpy8n0DAwwzhbWhek",
  authDomain: "todo-kun.firebaseapp.com",
  projectId: "todo-kun",
  storageBucket: "todo-kun.appspot.com",
  messagingSenderId: "1057583097277",
  appId: "1:1057583097277:web:5ffa433f3b08f3bdc75ed4"
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire



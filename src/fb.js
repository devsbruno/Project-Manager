import firebase from 'firebase/app'
import 'firebase/firestore'

 // Initialize Firebase
 var config = {
	apiKey: "AIzaSyB-StTRKpktvPH7HUtxzmrNXpIeW6Zreh0",
	authDomain: "the-ninja-todo-list.firebaseapp.com",
	databaseURL: "https://the-ninja-todo-list.firebaseio.com",
	projectId: "the-ninja-todo-list",
	storageBucket: "the-ninja-todo-list.appspot.com",
	messagingSenderId: "1011959897064"
};
firebase.initializeApp(config);

const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });
 
export default db;
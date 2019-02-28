import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var config = {
	apiKey: "AIzaSyAeK7kfSKfyerO_k3WQl-oPP8NU83_bluk",
	authDomain: "react-slack-clone-de19b.firebaseapp.com",
	databaseURL: "https://react-slack-clone-de19b.firebaseio.com",
	projectId: "react-slack-clone-de19b",
	storageBucket: "react-slack-clone-de19b.appspot.com",
	messagingSenderId: "803404192917"
};
firebase.initializeApp(config);

export default firebase;
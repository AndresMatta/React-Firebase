import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyC96B8imz6zrXDveHdXLPkfUYjYbQ8HpkE",
    authDomain: "mattagram-11a17.firebaseapp.com",
    databaseURL: "https://mattagram-11a17.firebaseio.com",
    projectId: "mattagram-11a17",
    storageBucket: "mattagram-11a17.appspot.com",
    messagingSenderId: "782880733016"
});

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

registerServiceWorker();

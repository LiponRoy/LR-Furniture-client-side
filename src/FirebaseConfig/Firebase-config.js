// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCrlPIdEriUul3b939NpUdoRxNLJ0dAKLs',
	authDomain: 'lr-furniture.firebaseapp.com',
	projectId: 'lr-furniture',
	storageBucket: 'lr-furniture.appspot.com',
	messagingSenderId: '56797137277',
	appId: '1:56797137277:web:5b6f66a882844c06536414',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// for google signin
export const provider = new GoogleAuthProvider();

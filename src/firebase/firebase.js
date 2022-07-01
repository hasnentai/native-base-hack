import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYL85a8H6c-_9fU4OtDE6LLTkVOJJIqAg',
  authDomain: 'native-base-hack.firebaseapp.com',
  projectId: 'native-base-hack',
  storageBucket: 'native-base-hack.appspot.com',
  messagingSenderId: '600550657392',
  appId: '1:600550657392:web:b4d14f69840385f6d613b5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };

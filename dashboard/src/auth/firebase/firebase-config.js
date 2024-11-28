import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDKR7qx-7CyGJX-T3JQbB4KmuPQKraFOj8',
    authDomain: 'auth-75823.firebaseapp.com',
    projectId: 'auth-75823',
    storageBucket: 'auth-75823.appspot.com',
    messagingSenderId: '57622410123',
    appId: '1:57622410123:web:4ef3abc082b89cf3ec758e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, signInWithPopup};
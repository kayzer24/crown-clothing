import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLZiiBto7KH9_njw3opToHetUFZuBsrAA",
    authDomain: "crown-db-3ca1a.firebaseapp.com",
    databaseURL: "https://crown-db-3ca1a.firebaseio.com",
    projectId: "crown-db-3ca1a",
    storageBucket: "crown-db-3ca1a.appspot.com",
    messagingSenderId: "955195383838",
    appId: "1:955195383838:web:51580683ef2483a0d28e0f",
    measurementId: "G-Q7NH002DVD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

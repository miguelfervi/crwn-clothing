import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBVuY0daaqBH_N7BQbOxrUMqCHfU8JKD70',
  authDomain: 'crwn-db-ae20a.firebaseapp.com',
  databaseURL: 'https://crwn-db-ae20a.firebaseio.com',
  projectId: 'crwn-db-ae20a',
  storageBucket: 'crwn-db-ae20a.appspot.com',
  messagingSenderId: '699573570845',
  appId: '1:699573570845:web:af71d1d2db4ea4b82325f4',
  measurementId: 'G-8SJK3YEC4N',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

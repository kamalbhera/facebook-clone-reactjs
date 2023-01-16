// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD-AXTXX01bYxNHC3XID5WhRas-DhBPqYs",
    authDomain: "facebook-clone-19f75.firebaseapp.com",
    projectId: "facebook-clone-19f75",
    storageBucket: "facebook-clone-19f75.appspot.com",
    messagingSenderId: "864444204090",
    appId: "1:864444204090:web:86b5205395ccef7b02e103",
    measurementId: "G-657J0LP4X8"
  };

  export const generateUserDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`Users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
      const { displayName, email, photoURL, dateOfbirth, gender } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
        alert('Error creating User ',error.message);
      }
    }
    return getUserDocument(userAuth.uid);
  }

  const getUserDocument = async uid => {
    if  (!uid) return null;
    try {
      const UserDocument = await firestore.doc(`Users/${uid}`).get();
      return {
        uid,
        ...UserDocument.data()
      };
    } catch (error) {
      console.log("Error fetching user ", error.message);
    }
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const firestore = firebase.firestore();
  const storage = firebase.storage();

  export { auth, provider };
  export { storage };
  export { firestore };
  export default db;
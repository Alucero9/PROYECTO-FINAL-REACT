import firebase from 'firebase/app';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0EUxnLcc1c5WxhhTjswV-_0II5PCzMn0",
  authDomain: "proyecto-react-eb60c.firebaseapp.com",
  projectId: "proyecto-react-eb60c",
  storageBucket: "proyecto-react-eb60c.appspot.com",
  messagingSenderId: "816112119855",
  appId: "1:816112119855:web:3b4092da9699ecfd6e96da"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
}


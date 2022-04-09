import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
import 'firebase/compat/database'


// const firebaseConfig = {
//     apiKey: "AIzaSyC8hP1L-E0nWZH8WMRhQqH5rV02jmDLYNw",
//     authDomain: "push-notifications-20f90.firebaseapp.com",
//     projectId: "push-notifications-20f90",
//     storageBucket: "push-notifications-20f90.appspot.com",
//     messagingSenderId: "582786857700",
//     appId: "1:582786857700:web:4979122d7f9eb692b0caf1"
// };




firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig);
export default firebase;

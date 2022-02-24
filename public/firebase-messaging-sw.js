
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-database.js")


const firebaseConfig = {
    apiKey: "AIzaSyC8hP1L-E0nWZH8WMRhQqH5rV02jmDLYNw",
    authDomain: "push-notifications-20f90.firebaseapp.com",
    projectId: "push-notifications-20f90",
    storageBucket: "push-notifications-20f90.appspot.com",
    messagingSenderId: "582786857700",
    appId: "1:582786857700:web:4979122d7f9eb692b0caf1"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log("Recieved Background Message", payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: '/logo192.png'
//     };
//     this.registration.showNotification(
//         notificationTitle,
//         notificationOptions
//     );
// })



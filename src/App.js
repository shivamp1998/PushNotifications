import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import {useEffect, useState} from 'react';
import Display from './Display/display'

function App() {
  const messaging = firebase.messaging();
  let token = '';
  const onSubscribe = () => {
    Notification.requestPermission().then( async (permission) => {
      if(permission === 'granted') {
        token = await messaging.getToken({vapidKey: "BMayH_z8vqDBTEF7A8kE8eiaWf-te8sKZjqk3ESeJy0gQM-AzbGMHTU9d0qNS_ddCL5-gXw36FJ53c4_WxnoroU"});
      }
    }).catch(err => console.log(err));
    console.log(token);
  }
  
  const sendNotification = async () => {
    setShow(true);
   let body = {
      to: token,
      notification : {
        title: 'This is a test notification',
        body: 'this is a test message'
      }
    }
    let options = {
      method: "POST",
      headers : new Headers({
        "Authorization": "key=AAAAh7DNuuQ:APA91bEcZ5Cz_zWuuOPBptXsMMvPBOH2e5YS998Lwmvf6bKjDOdZY93-Uvr1qwCz0xyuL7eg7Ir9lrxux7BNBLOaLeQfK5iVW6FQ4viygK-C9hsIu9-rMbz8D_SEq5CWiNaXSNtOFC2b",
        "Content-Type" : "application/json"
      }),
      body: JSON.stringify(body)
    }
    await fetch('https://fcm.googleapis.com/fcm/send', options).then( res=> {console.log("SENT")}).catch(err => console.log(err));
    console.log(body);
  }
  
  const [title,setTitle] = useState('');
  const [message,setMessage] = useState('');
  messaging.onMessage( res => {
    console.log(res);
    setTitle(res.notification.title);
    setMessage(res.notification.message);
  })
  const [show,setShow] = useState(false);
  
 


  return (
    <div className="App">
      <button type="button" onClick = {onSubscribe}>Subscribe</button>
      <button type="button" onClick = {sendNotification}> Send Notification </button>
      <Display title={title} message={message}/>
    </div>
  );
}

export default App;

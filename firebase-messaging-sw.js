importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBmaB9_OnNGULAmYCQS_lsZmhrltqW6kzU",
  authDomain: "pwd-project-220d5.firebaseapp.com",
  projectId: "pwd-project-220d5",
  storageBucket: "pwd-project-220d5.appspot.com",
  messagingSenderId: "374511462216",
  appId: "1:374511462216:web:55070175f4f4aa8833357d"
});

const messaging = getMessaging(firebaseApp);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
}

  
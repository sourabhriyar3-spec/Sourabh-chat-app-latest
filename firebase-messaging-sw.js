// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// 🟢 Insert your specific Firebase keys here
firebase.initializeApp({
  projectId: "kuku-171b0",
  databaseURL: "https://kuku-171b0-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "1031072759094",
  appId: "1:1031072759094:android:46cbde78f6e623a3908797"
});

const messaging = firebase.messaging();

// This runs when the app is swiped closed in the background
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png', // Lock icon
    badge: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

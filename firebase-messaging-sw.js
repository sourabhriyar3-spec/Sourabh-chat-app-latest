importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  projectId: "kuku-171b0",
  databaseURL: "https://kuku-171b0-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "1031072759094",
  appId: "1:1031072759094:android:46cbde78f6e623a3908797"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Background message received ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

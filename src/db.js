import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyD3jQrUyRGAWV8Zp5Y-vttg5G1m3i2CAlY",
    authDomain: "sa2020-4db34.firebaseapp.com",
    databaseURL: "https://sa2020-4db34.firebaseio.com",
    projectId: "sa2020-4db34",
    storageBucket: "sa2020-4db34.appspot.com",
    messagingSenderId: "428905123312",
    appId: "1:428905123312:web:87d444c7314726dca4a135",
    measurementId: "G-48H7S2B4VT"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  export const db = firebaseApp
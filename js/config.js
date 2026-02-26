// AR-ELITE HUB Master Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx8t4Xa9sihbNKT7p8HApH7SeXChuL6pg",
  authDomain: "arelitehackerrat.firebaseapp.com",
  projectId: "arelitehackerrat",
  storageBucket: "arelitehackerrat.firebasestorage.app",
  messagingSenderId: "549633970416",
  appId: "1:549633970416:web:e3c0abe7b866e8e499f235",
  measurementId: "G-PDRQHMNW77"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database(); // Realtime Database logic ke liye

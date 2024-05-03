import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYSIbcjY0XGM-3l8mmYSXHEUSQR-1ok80",
  authDomain: "e-commerce-269df.firebaseapp.com",
  projectId: "e-commerce-269df",
  storageBucket: "e-commerce-269df.appspot.com",
  messagingSenderId: "574211550070",
  appId: "1:574211550070:web:d3e97a4d5fbe2f2b622857"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

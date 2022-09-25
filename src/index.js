import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <React.StrictMode> */
    <App />
/*   </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdGdSuvAQd-0rRxMpxfGTxGY5spWFhAOI",
  authDomain: "coderhouse-ecommerce-d6ddd.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d6ddd",
  storageBucket: "coderhouse-ecommerce-d6ddd.appspot.com",
  messagingSenderId: "164874978477",
  appId: "1:164874978477:web:e84d3292031ce0c8da3224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
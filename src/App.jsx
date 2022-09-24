import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react"; 

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMRIbnzw9-WOQARd3jnHABHON1TA0F_Qw",
  authDomain: "portfolio-jn.firebaseapp.com",
  projectId: "portfolio-jn",
  storageBucket: "portfolio-jn.appspot.com",
  messagingSenderId: "950762575059",
  appId: "1:950762575059:web:3887a64be900d3e36bb026",
  measurementId: "G-4NFPZ39HCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;

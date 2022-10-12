
import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'
import Home from "./components/Home.js";
import Services from './components/Services.js'
import Login from './components/Login.js'
import Team from "./components/Team.js";
import Footer from './components/Footer.js';
import Blog from "./components/Blog.js"




function App() {

  return (
    <React.Fragment>
   
   
      <Navbar />
      <Home />
      <Services />
      <Login />
      <Team />
      <Blog />
      <Footer />
  
   
    </React.Fragment>
  );
}

export default App ;


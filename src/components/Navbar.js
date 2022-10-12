import React from 'react';
import '../assets/css/navbar.css';
import { GiSemiClosedEye } from 'react-icons/gi';


export default function test() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  nav-color ">
  <div className="container  ">
    <a className="navbar-brand " href="#">
     <div className='displaycolumn'>
        <p className='text-light h3 '> {<GiSemiClosedEye />} </p>
        <p className='gloxy'>GLOXY</p>
     </div>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#home">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light " href="#services">
            SERVICES
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-light" href="#team">
            TEAM
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#blog">
          BLOGS
          </a>
        </li>
       
       
        <li className="nav-item">
          <a className="nav-link text-light" href="#login">
            LOGIN
          </a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>




  )
}

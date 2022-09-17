import React from 'react';
import { NavLink } from 'react-router-dom';





function Navbar() {
  return (
    <div className='main-nav'>
      <div className='logo'>
        <img className='logo1' src="logo.svg" alt="" />
      </div>
      <div className='nav'>

        <button className='btn-nav' ><NavLink to="/Home" activeClassName="active">Home</NavLink> </button>
        <button className='btn-nav'><NavLink to="/About" activeClassName="active">About</NavLink></button>
        <button className='btn-nav'><NavLink to="/Education" activeClassName="active">Education</NavLink></button>
        <button className='btn-nav' ><NavLink to="/Skills" activeClassName="active">Skills</NavLink></button>
        <button className='btn-nav' ><NavLink to="/Service" activeClassName="active">Service</NavLink></button>
        <button className='btn-nav' ><NavLink to="/Contact" activeClassName="active">Contact</NavLink></button>

      </div>
    </div>
  )
}

export default Navbar
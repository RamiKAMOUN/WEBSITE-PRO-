import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import navbar from './navbar.css'
import logo from '../images/logo.png'
import { FaBars } from "react-icons/fa6";
import {links} from './data'
import data from './data'
import { FiX } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Social_links = [
  
  { name: 'Facebook', path: 'https://www.facebook.com/your-facebook-page' },
  { name: 'LinkedIn', path: 'https://www.linkedin.com/in/your-linkedin-profile' },
];
const Navbar = () => {
  const [isNavShowing,setIsNavShowing]=useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="Nav Logo" />
        </Link>

        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              {name === 'Societe' ? (
                <div className="dropdown societe-dropdown">
                  <span className="dropdown-title">{name}</span>
                  <div className="dropdown-content">
                    <NavLink to="/APropos" onClick={() => setIsNavShowing(false)}>A Propos</NavLink>
                    <NavLink to="/NotreHistoire" onClick={() => setIsNavShowing(false)}>Notre Histoire</NavLink>
                    <NavLink to="/NotreFamille" onClick={() => setIsNavShowing(false)}>Notre Famille</NavLink>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? 'active-nav' : ''}
                  onClick={() => setIsNavShowing(prev => !prev)}
                >
                  {name}
                </NavLink>
              )}
            </li>
          ))}
          <li>
          <a href="https://www.facebook.com/progedsolutions/ " target="_blank" rel='noreferrer noopener'><FaFacebook /></a>

            <a href="https://www.linkedin.com/company/proged/" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>
          </li>
        </ul>

        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {isNavShowing ? <FaBars /> : <FiX />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar  
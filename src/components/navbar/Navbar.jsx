import React, { useState } from 'react';

import './navbar.css';

import {
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [

    {
      label: 'Home',
      id: 'home'
    },

    {
      label: 'About',
      id: 'about'
    },

    {
      label: 'Skills',
      id: 'skills'
    },

    {
      label: 'Experience',
      id: 'experience'
    },

    {
      label: 'Projects',
      id: 'projects'
    },

    {
      label: 'Services',
      id: 'services'
    },

    {
      label: 'Contact',
      id: 'contact'
    }

  ];

  // SCROLL
  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: 'smooth'
      });

    }
  };

  return (

    <nav className="navbar">

      <div className="container nav-container">

        {/* LOGO */}
        <h1
          className="logo"
          onClick={() => scrollToSection('home')}
        >

         Vamshi <span> Singapakula</span>

        </h1>

        {/* MOBILE MENU ICON */}
        <div
          className="menu-toggle"

          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </div>

        {/* NAV LINKS */}
        <ul
          className={
            menuOpen
              ? 'nav-links active'
              : 'nav-links'
          }
        >

          {navItems.map((item, index) => (

            <li
              key={index}

              onClick={() => {

                scrollToSection(item.id);

                setMenuOpen(false);

              }}
            >

              {item.label}

            </li>

          ))}

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;
import React from 'react';
import './navbar.css';

const Navbar = () => {

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

  // SCROLL FUNCTION
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
          Singapakula<span> Vamshi</span>
        </h1>

        {/* NAV LINKS */}
        <ul className="nav-links">

          {navItems.map((item, index) => (

            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>

          ))}

        </ul>

        {/* BUTTON */}
       

      </div>

    </nav>
  );
};

export default Navbar;
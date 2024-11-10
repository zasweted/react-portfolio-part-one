import React from 'react';
import './HeaderNav.css';

const HeaderNav = ({ activeSection  }) => {
  return (
    <nav className="header__nav">
        <ul>
            <li>
                <a href="#about">
                    <span className={`nav__indicator ${activeSection === 'about' ? 'nav__active' : ''}`}></span>
                    <span className={`nav__text ${activeSection === 'about' ? 'nav__active' : ''}`}>About</span>
                </a>
            </li>
            <li>
                <a href="#experience">
                    <span className={`nav__indicator ${activeSection === 'experience' ? 'nav__active' : ''}`}></span>
                    <span className={`nav__text ${activeSection === 'experience' ? 'nav__active' : ''}`}>Experience</span>
                </a>
            </li>
            <li>
                <a href="#projects">
                    <span className={`nav__indicator ${activeSection === 'projects' ? 'nav__active' : ''}`}></span>
                    <span className={`nav__text ${activeSection === 'projects' ? 'nav__active' : ''}`}>Projects</span>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderNav

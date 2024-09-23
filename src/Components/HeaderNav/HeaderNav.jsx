import React from 'react';
import './HeaderNav.css';

const HeaderNav = () => {
  return (
    <nav className="header__nav">
        <ul>
            <li>
                <a href="#about">
                    <span className='nav__indicator nav__active'></span>
                    <span className='nav__text nav__active'>About</span>
                </a>
            </li>
            <li>
                <a href="#experience">
                    <span className='nav__indicator'></span>
                    <span className='nav__text'>Experience</span>
                </a>
            </li>
            <li>
                <a href="#projects">
                    <span className='nav__indicator'></span>
                    <span className='nav__text'>Projects</span>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderNav
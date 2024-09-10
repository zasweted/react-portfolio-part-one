import React from 'react';
import './HeaderNav.css';

const HeaderNav = () => {
  return (
    <nav className="header__nav">
        <ul>
            <li>
                <a>
                    <span className='transition-all nav__indicator nav__active'></span>
                    <span className='transition-all nav__text nav__active'>About</span>
                </a>
            </li>
            <li>
                <a>
                    <span className='transition-all nav__indicator'></span>
                    <span className='transition-all nav__text'>Experience</span>
                </a>
            </li>
            <li>
                <a>
                    <span className='transition-all nav__indicator'></span>
                    <span className='transition-all nav__text'>Projects</span>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderNav
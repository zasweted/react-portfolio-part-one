import React from 'react';
import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = () => {
  return (
    <header className='header__sticky'>
        <div>
            <a href="/">
                <h1>Aleksandr Vasiljev</h1>
            </a>
            <h2>Junior Fullstack Developer</h2>
            <p>I build pixel-perfect, engaging, and accessible digital experiences.</p>
            <HeaderNav />
        </div>
    </header>
  )
}

export default Header
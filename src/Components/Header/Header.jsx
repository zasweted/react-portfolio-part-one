import React, { useState, useEffect } from 'react';
import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderSocials from '../HeaderSocials/HeaderSocials';

const Header = ({ activeSection }) => {

  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='header__sticky'>
      <div>
        <a href="/">
          <h1>Aleksandr Vasiljev</h1>
        </a>
        <h2>Junior Fullstack Developer</h2>
        <p>I build pixel-perfect, engaging, and accessible digital experiences.</p>

        {isTablet ? (
          null
        ) : (
          <HeaderNav activeSection={activeSection} />
        )}
      </div>

      <HeaderSocials />
    </header>
  )
}

export default Header
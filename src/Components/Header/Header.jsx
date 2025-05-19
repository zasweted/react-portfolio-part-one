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
        <p>
          Passionate about building robust, scalable, and efficient <span>back end</span> systems for <span>tourism</span> and <span>reservation platforms</span>. Combining logic-driven development with creative problem-solving to deliver reliable digital solutions.
        </p>

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
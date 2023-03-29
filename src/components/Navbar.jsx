import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import logo from '../images/logo.png';

const Navbar = () => {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(false);
  }, [pathname]);

  return (
    <NavbarStyle>
      <h1>
        <Link to='/'>
          <img id='logo' src={logo} title='Home' alt='logo-not-found' />
        </Link>
      </h1>
      <div className={click ? 'header__navMenu' : 'header__nav'}>
        <ul className='menu_icon_hamburger'>
          <li>
            <Link to='/'>1. About Me</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/' ? '50%' : '0%' }}
            />
          </li>
          <li>
            <Link to='/work'>2. My Works</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/work' ? '50%' : '0%' }}
            />
          </li>
          <li>
            <Link to='/experience'>3. My Experiences</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{
                width: pathname === '/experience' ? '50%' : '0%',
              }}
            />
          </li>
          <li>
            <Link to='/contact'>4. Contact Me</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
            />
          </li>
        </ul>
      </div>
      <div className='nav_icon' onClick={() => setClick((prev) => !prev)}>
        {click ? (
          <i className='ri-close-fill' />
        ) : (
          <i className='ri-menu-line' />
        )}
      </div>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #1a1a1a; //#282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    width: 64px;
    filter: grayscale(100%);
    transition: all 0.5s ease-in;
    &:hover {
      filter: grayscale(0%);
    }
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .nav_icon {
    display: none;
  }

  .header__navMenu {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 50px;
    opacity: 1;
    background-color: #282828;
    width: 100%;
    height: auto;
  }

  .header__navMenu > ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .header__navMenu > ul > li {
    margin-top: 32px;
    color: #fff;
  }

  .menu_icon_hamburger {
    animation: growDown 300ms ease-in-out forwards;
  }

  .login-display-profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }

    80% {
      transform: scaleY(1.1);
    }

    100% {
      transform: scaleY(1);
    }
  }

  @media (max-width: 600px) {
    flex-direction: row !important;
    justify-content: space-between;
    height: 4vh !important;
    .header__nav {
      display: none;
    }
    .nav_icon {
      color: white;
      display: block;
      cursor: pointer;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    .header__nav {
      width: 80vw;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: cyan;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
  @media (max-width: 600px) {
    max-width: 25% !important;
  }
`;

export default Navbar;

import React, { useMatch, useState, useEffect } from 'react';
import NavItem from './NavItem';

export default function Navbar() {
  const match = useMatch();
  const [active, setActive] = useState('about');
  useEffect(() => {
    if (match.url.includes('/portfolio')) {
      setActive('portfolio');
    } else if (match.url.includes('/contact')) {
      setActive('contact');
    } else {
      setActive('about');
    }
  }, [match]);
  return (
    <nav className='navbar navbar-expand-md'>
      <a className='nav-item active first-name' href='/'>
        PAUL KIRKPATRICK
      </a>
      <button
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='fa fa-bars'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <NavItem active={active === 'about'} href='/'>
            ABOUT ME
          </NavItem>
          <NavItem active={active === 'portfolio'} href='/portfolio'>
            PORTFOLIO
          </NavItem>
          <NavItem active={active === 'contact'} href='/contact'>
            CONTACT
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

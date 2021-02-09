import React from 'react';
import NavItem from './NavItem';

export default function Navbar({ active }) {
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
          <NavItem active={active} href='/'>
            ABOUT ME
          </NavItem>
          <NavItem active={active} href='/portfolio'>
            PORTFOLIO
          </NavItem>
          <NavItem active={active} href='/contact'>
            CONTACT
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

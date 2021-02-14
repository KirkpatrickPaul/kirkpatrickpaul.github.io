import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default function NavItem({ active, href, children }) {
  return (
    <li className='nav-item'>
      <Link to={href} className={'nav-link ' + active ? 'active' : 'inactive'}>
        {children}
      </Link>
    </li>
  );
}

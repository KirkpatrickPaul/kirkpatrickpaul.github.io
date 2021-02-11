import React from 'react';

export default function NavItem({ active, href, children }) {
  return (
    <li className='nav-item'>
      <a className={'nav-link ' + active ? 'active' : 'inactive'} href={href}>
        {children}
      </a>
    </li>
  );
}

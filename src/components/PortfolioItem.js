import React from 'react';
import './PortfolioItem.css';

export default function PortfolioItem({ name, page, image, github, children }) {
  return (
    <div className='col-md-6'>
      <div className='row my-md-2'>
        <div className='col-md-4'>
          <a href={page}>
            <img className='img' alt={name} src={image} />
          </a>
          <a
            className='repository btn ml-4'
            role='button'
            href={github}
            style={{ maxWidth: '150px', minWidth: '125px' }}
          >
            Repository
          </a>
        </div>
        <div className='col-lg-8'>{children}</div>
      </div>
    </div>
  );
}

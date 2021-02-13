import React from 'react';
import './PortfolioItem.css';

export default function PortfolioItem({ name, page, image, github, children }) {
  return (
    <div className='col-md-6'>
      <div className='row my-md-2'>
        <div className='col-lg-4'>
          <a href={page}>
            <img className='img' alt={name} src={image} />
          </a>
          <a className='repository btn btn-block ml-2' href={github}>
            Repository
          </a>
        </div>
        <div className='col-lg-8'>{children}</div>
      </div>
    </div>
  );
}

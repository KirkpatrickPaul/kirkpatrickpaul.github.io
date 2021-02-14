import React from 'react';
import portfolioItems from '../portfolioItems';
import PortfolioItem from '../components/PortfolioItem';

export default function Portfolio() {
  return (
    <div
      className='container'
    >
      <h4 className='my-4'>
        <strong>See My Work</strong> at:{' '}
        <a id='github' href='https://github.com/KirkpatrickPaul'>
          <i className='fab fa-github'></i>Github
        </a>
      </h4>
      <div className='row'>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

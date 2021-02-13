import React from 'react';

export default function PortfolioItem({ name, page, image, github, children }) {
  return (
    <div class='col-md-6'>
      <div class='row my-md-2'>
        <div class='col-lg-4'>
          <a href={page}>
            <img class='img' alt={name} src={image} />
          </a>
          <a class='repository btn btn-block ml-2' href={github}>
            Repository
          </a>
        </div>
        <div class='col-lg-8'>{children}</div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import LinkedIn from '../components/Linkedin';

export default function About() {
  const [collapse, setCollapse] = useState({ aria: false, resume: 'collapse' });

  function toggleResume() {
    if (collapse.aria) {
      setCollapse({ aria: false, resume: 'collapse' });
    } else {
      setCollapse({ aria: true, resume: 'collapse show' });
    }
  }

  return (
    <div
      className='container'
      id='bio-container'
    >
      <img
        src='./Assets/Paul Kirkpatrick.jpg'
        className='img-fluid float-left'
        alt='Picture of Paul Kirkpatrick'
      />
      <p>
        <span className='first-name' style={{ color: '#9cb700' }}>
          Paul Kirkpatrick{' '}
        </span>
        has lived in Wichita, KS since 2001 and enjoys building computers,
        gaming, and ultimate frisbee. Paul has been interested in coding since
        high school, but has only recently formalized his education. He lives
        with his wonderful wife and three children and plays Bass Guitar at his
        church. He was born in Newton, KS where he grew up.
      </p>
      <a
        href='./Assets/Paul Kirkpatrick Resume 2020.pdf'
        className='btn m-4'
        download='Paul Kirkpatrick Resume'
      >
        Download my Résumé
      </a>
      <button
        onClick={toggleResume}
        className='btn my-4'
        type='button'
        data-toggle='collapse'
        data-target='#Resume'
        aria-expanded={collapse.aria}
        aria-controls='Resume'
      >
        See my Résumé
      </button>
      <div className='clearfix'></div>
      <div className={collapse.resume} id='Resume'>
        <div className='card card-body'>
          <img
            className='img-fluid'
            src='./Assets/Paul Kirkpatrick Resume 2020.jpg'
            alt='Paul Kirkpatrick Resume'
          />
        </div>
      </div>
      <LinkedIn />
    </div>
  );
}

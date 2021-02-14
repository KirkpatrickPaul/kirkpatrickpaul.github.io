import React from 'react';
import LinkedIn from '../components/Linkedin';

export default function Contact() {
  return (
    <div className='container'>
      <h4 className='my-4'>
        <strong>Email Me:</strong>{' '}
        <a id='email' href='mailto:kirkpatrick.in.316@gmail.com'>
          kirkpatrick.in.316@gmail.com
        </a>
      </h4>
      <h4 className='my-4'>
        <strong>Call Me:</strong>{' '}
        <a id='phone' href='tel:316-209-2313'>
          (316) 209-2313
        </a>
      </h4>
      <h4>
        My <strong>Linkedin: </strong>
      </h4>
      <LinkedIn />
    </div>
  );
}

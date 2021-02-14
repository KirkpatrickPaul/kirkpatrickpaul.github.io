import React from 'react';

export default function Linkedin(props) {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-4'>
          <div
            className='LI-profile-badge'
            data-version='v1'
            data-size='medium'
            data-locale='en_US'
            data-type='vertical'
            data-theme='dark'
            data-vanity='paul-kirkpatrick-ba2998160'
          >
            <a
              className='LI-simple-link'
              href='https://www.linkedin.com/in/paul-kirkpatrick-ba2998160?trk=profile-badge'
            >
              My Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

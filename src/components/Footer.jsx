import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <div className='footer-container mt-10 object-contain text-base font-worksans'>
      <p>
        © 2024 <strong>Rohit Kumar</strong>. All rights reserved.
      </p>
      <div className='flex gap-3 justify-center items-center'>
        {socialLinks.map((social, index) => (
          <Link key={index} to={social.link} target='_blank' rel='noopener noreferrer'>
            <img
              src={social.iconUrl}
              alt={social.name}
              className='w-6 h-6 object-contain hover:scale-125 transform transition duration-300'
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;

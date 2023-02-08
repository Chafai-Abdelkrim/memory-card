import React from 'react';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
      <a
        className="footer-link"
        href="https://github.com/Chafai-Abdelkrim"
        target="_blank"
        rel="noreferrer"
      >
        <p>Abdelkrim Chafai</p>
        <BsGithub />
      </a>
    </div>
  );
}

export default Footer;
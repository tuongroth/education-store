import React from 'react';
import './CopyRight.css';
import { FootersLinksData } from '../../Data/Data';

export default function FooterCopyright() {
  return (
    <div className="footer-copyright">
  <div className="copyright-container">
    <p>© 2024 Zapterify. All rights reserved.</p>
    <div className="footer-socials">
      {FootersLinksData.socials.map((item, index) => (
        <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
          <item.icon />
        </a>
      ))}
    </div>
  </div>
</div>

  );
}


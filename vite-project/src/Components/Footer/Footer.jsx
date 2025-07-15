import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Copyright from '../CopyRight/CopyRight';

const Footer = () => {
  const FootersLinksData = {
    AboutUs: [
      { linkname: 'Vision', link: "#" },
      { linkname: 'Articles', link: "#" },
      { linkname: 'Careers', link: "#" },
      { linkname: 'Service Terms', link: "#" },
      { linkname: 'Donate', link: "#" },
    ],
    Discover: [
      { linkname: 'Home', link: "#" },
      { linkname: 'Articles', link: "#" },
      { linkname: 'Books', link: "#" },
      { linkname: 'Authors', link: "#" },
      { linkname: 'Subjects', link: "#" },
      { linkname: 'Advanced Search', link: "#" },
    ],
    MyAccount: [
      { linkname: 'Sign In', link: "#" },
      { linkname: 'Articles', link: "#" },
      { linkname: 'View Cart', link: "#" },
      { linkname: 'My Wishlist', link: "#" },
      { linkname: 'Track My Order', link: "#" },
    ],
    Help: [
      { linkname: 'Help Center', link: "#" },
      { linkname: 'Report a Problem', link: "#" },
      { linkname: 'View Cart', link: "#" },
      { linkname: 'Suggesting Edits', link: "#" },
      { linkname: 'Contact Us', link: "#" },
    ],
  };

  return (
    <footer>
      <div className="container footer-container">

        <div className="footer-column">
          <h4>About Us</h4>
          <ul className="param-links">
            {FootersLinksData.AboutUs.map(({ link, linkname }, index) => (
              <li key={index}>
                <Link to={link}>{linkname}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Discover</h4>
          <ul className="param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => (
              <li key={index}>
                <Link to={link}>{linkname}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>My Account</h4>
          <ul className="param-links">
            {FootersLinksData.MyAccount.map(({ link, linkname }, index) => (
              <li key={index}>
                <Link to={link}>{linkname}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul className="param-links">
            {FootersLinksData.Help.map(({ link, linkname }, index) => (
              <li key={index}>
                <Link to={link}>{linkname}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { navLinks, navRight } from '../../Data/Data';
import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';

export default function Nav() {
  const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);

  const toggleNav = () => {
    setIsNavLinksShowing(prev => !prev);
  };

  useEffect(() => {
  const handleScroll = () => {
    // Add shadow to nav if scrolled down
    document.querySelector('nav')?.classList.toggle('navShadow', window.scrollY > 0);

    // Hide nav-links on scroll for smaller screens
    if (window.innerWidth < 1024) {
      document.querySelector('.nav-links')?.classList.add('navLinksHide');
      setIsNavLinkShowing(false); // Assuming this is from useState
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <nav>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsNavLinksShowing(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Nav Right */}
        <div className="nav-right">
          {navRight?.managements?.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              target="_blank"
              className="management-icons"
            >
              <item.icon />
            </Link>
          ))}

          {/* Menu Toggle Button */}
          <button className="menu-button" onClick={toggleNav}>
            {!isNavLinksShowing ? <VscMenu /> : <GrClose />}
          </button>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { menu, socialHandles } from "../../data"; // Import both menu and socialHandles

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section__wrapper">
        <ul className="nav__link__container">
          {menu.map((item, index) => (
            <Link
              key={index}
              activeClass="active"
              className="tab__item name"
              to={item.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="social__handles__container">
          {socialHandles.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="icon__container social__handle"
              target="_blank"
              rel="noopener noreferrer" // Add rel for security
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="copyright__container">
          <h3>Copyright &copy; All rights reserved - | 2024</h3>
          <p className="text__muted">Built with love by Edem K. Anagbah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

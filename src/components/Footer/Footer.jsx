import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from '../../images/footerIcons/footerIcons';

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-list">
        <div className="footer-socials">
          <p className="title-soc">Learn more about EduSite</p>
          <ul className="contacts-soc-list list">
            <li className="soc-item">
              <a href="" className="contacts-soc-link">
                <LinkedinIcon />
              </a>
            </li>
            <li className="soc-item">
              <a href="" className="contacts-soc-link">
                <InstagramIcon />
              </a>
            </li>
            <li className="soc-item">
              <a href="" className="contacts-soc-link">
                <FacebookIcon />
              </a>
            </li>
            <li className="soc-item">
              <a href="" className="contacts-soc-link">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
        <p>
          © 2023 EduSite All Rights Reserved. 
        </p>
      </div>
    </footer>
  );
};

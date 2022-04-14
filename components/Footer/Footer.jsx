import Link from 'next/link';

import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        <div className={styles.footerUpperItem}>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Support</h4>
          <ul>
            <Link href='/donate'>
              <a>
                <li>Donate</li>
              </a>
            </Link>
            <li>Documentation</li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Our Team</h4>
          <ul>
            <li>Meet Members</li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Platform</h4>
          <ul>
            <Link href='/categories'>
              <a>
                <li>Categories</li>
              </a>
            </Link>
            <Link href='/about'>
              <a>
                <li>About</li>
              </a>
            </Link>
            <Link href='/contact'>
              <a>
                <li>Contact</li>
              </a>
            </Link>
            <Link href='/developers'>
              <a>
                <li>Developers</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Subscribe</h4>
          <span>The latest news, weekly on your inbox</span>
          <form className={styles.footerForm}>
            <input
              className={styles.footerFormEmail}
              required
              min={3}
              type='email'
              placeholder='Enter your email'
            />
            <input
              className={styles.footerFormSubmit}
              type='submit'
              value='Subscribe'
            />
          </form>
        </div>
      </div>
      <div className={styles.footerLower}>
        <div className={styles.footerLowerCopyright}>
          Copyright &copy;{new Date().getFullYear()} Earthquiet
        </div>
        <div className={styles.footerLowerSocials}>
          <span>
            <a target='blank' href='https://twitter.com'>
              <FaTwitter />
            </a>
          </span>
          <span>
            <a target='blank' href='https://instagram.com'>
              <FaInstagram />
            </a>
          </span>
          <span>
            <a target='blank' href='https://instagram.com'>
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

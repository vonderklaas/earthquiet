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
            <li>
              <Link href='/privacy'>
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href='/terms'>
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href='/cookies'>
                <a>Cookies</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Support</h4>
          <ul>
            <li>
              <Link href='/donate'>
                <a>Donate</a>
              </Link>
            </li>
            <li>
              <Link href='/documentation'>
                <a>Documentation</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Our Team</h4>
          <ul>
            <li>
              <Link href='/team'>
                <a>Our Team</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Platform</h4>
          <ul>
            <li>
              <Link href='/categories'>
                <a>Categories</a>
              </Link>
            </li>
            <li>
              <Link href='/contribute'>
                <a>Contribution</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
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
              value='Email me'
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

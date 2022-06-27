import Link from 'next/link';

import Banner from '../Banner/Banner';

import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Banner />
      <div className={styles.footerUpper}>
        <div className={styles.footerUpperItem}>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href='/cookies'>
                <a>cookies</a>
              </Link>
            </li>
            <li>
              <Link href='/terms'>
                <a>terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href='/privacy'>
                <a>privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>General</h4>
          <ul>
            <li>
              <Link href='/categories'>
                <a>categories</a>
              </Link>
            </li>
            <li>
              <Link href='/contribute'>
                <a>contribute</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <h4>Platform</h4>
          <ul>
            <li>
              <Link href='/docs'>
                <a>docs</a>
              </Link>
            </li>
            <li>
              <Link href='/team'>
                <a>team</a>
              </Link>
            </li>
            <li>
              <Link href='/donate'>
                <a>donate</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLower}>
        <div className={styles.footerLowerCopyright}>
          Copyright &copy;{new Date().getFullYear()} Earthquiet
        </div>
        <div className={styles.footerLowerSocials}>
          <a target='blank' href='https://twitter.com'>
            <FaTwitter />
          </a>
          <a target='blank' href='https://instagram.com'>
            <FaInstagram />
          </a>
          <a target='blank' href='https://www.linkedin.com/company/earthquiet'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

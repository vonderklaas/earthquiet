import Link from 'next/link';
import Image from 'next/image';

import Banner from '../Banner/Banner';

import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Banner />
        <nav className={styles.navbar}>
          <div className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>
              <Link href='/'>
                <a>
                  <Image
                    className={styles.navbarLogoImage}
                    src='/logo.png'
                    alt='EARTHQUIET'
                    width='45'
                    height='45'
                  />
                </a>
              </Link>
            </div>
            <ul className={styles.navbarMenu}>
              <li
                className={
                  router.pathname == '/categories' ? 'active-link' : ''
                }
              >
                <Link href='/categories'>
                  <a className={styles.navbarMenuLink}>Categories</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == '/contribute' ? 'active-link' : ''
                }
              >
                <Link href='/contribute'>
                  <a className={styles.navbarMenuLink}>Contribute</a>
                </Link>
              </li>
              <li className={router.pathname == '/about' ? 'active-link' : ''}>
                <Link href='/about'>
                  <a className={styles.navbarMenuLink}>About</a>
                </Link>
              </li>
              <li
                className={router.pathname == '/contact' ? 'active-link' : ''}
              >
                <Link href='/contact'>
                  <a className={styles.navbarMenuLink}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

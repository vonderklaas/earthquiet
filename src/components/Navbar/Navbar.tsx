import Link from 'next/link';
import Image from 'next/image';

import NextNProgress from 'nextjs-progressbar';

import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.navbar}>
          <div className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>
              {router.pathname !== '/' ? (
                <Link href='/'>
                  <a>
                    <Image
                      src='/logo.png'
                      alt='EARTHQUIET'
                      width='40'
                      height='40'
                    />
                  </a>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
            <ul className={styles.navbarMenu}>
              <li
                className={
                  router.pathname == '/categories' ? 'active-link' : ''
                }
              >
                <Link href='/categories'>
                  <a className={styles.navbarMenuLink}>Problems</a>
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
                  <a className={styles.navbarMenuLink}>About us</a>
                </Link>
              </li>
              <li
                className={router.pathname == '/contact' ? 'active-link' : ''}
              >
                <Link href='/contact'>
                  <a className={styles.navbarMenuLink}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <NextNProgress
        color='rgb(43, 153, 122)'
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
    </header>
  );
};

export default Navbar;

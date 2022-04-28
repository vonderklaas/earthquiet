import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Banner from '../Banner/Banner';

import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>EARTHQUIET</title>
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta
          name='keywords'
          content='EARTH, Earth, Problems, World Problems'
        />
        <meta
          name='description'
          content='EARTHQUIET - is a free, web-based resource and community created
          platform, which is maintained by enthusiasts only.'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
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
                    width='50'
                    height='50'
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

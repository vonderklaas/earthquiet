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
        <meta name='theme-color' content='#ffffff' />
        <meta name='application-name' content='EARTHQUIET' />
        <meta name='apple-mobile-web-app-title' content='EARTHQUIET' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta
          name='keywords'
          content='EARTH, Global Problems, World, Issues, Global Warming, Climate Change'
        />
        <meta
          name='description'
          content='EARTHQUIET - is a free, web-based resource and community created
          platform, which is maintained by enthusiasts only.'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <link rel='shortcut icon' href='../../public/favicons/favicon.ico' />

        <link
          rel='mask-icon'
          href='../../public/favicons/apple-touch-icon-152x152.png'
          color='#ffffff'
        />

        <link
          rel='apple-touch-icon-precomposed'
          sizes='152x152'
          href='../../public/favicons/apple-touch-icon-152x152.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='../../public/favicons/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='../../public/favicons/favicon-16x16.png'
          sizes='16x16'
        />
        <meta name='application-name' content='EARTHQUIET' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta
          name='msapplication-square150x150logo'
          content='../../public/favicons/mstile-150x150.png'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap'
          rel='stylesheet'
          crossOrigin='true'
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

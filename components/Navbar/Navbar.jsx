import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <header>
      <Head>
        <title>Earthquiet</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto:wght@100;300;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href='/'>
            <a>
              <Image
                className={styles.navbarLogoImage}
                src='/logo.png'
                alt='Logo'
                width='60'
                height='60'
              />
            </a>
          </Link>
        </div>
        <ul className={styles.navbarMenu}>
          <li className={router.pathname == '/categories' ? 'active-link' : ''}>
            <Link href='/categories'>
              <a className={styles.navbarMenuLink}>Problems</a>
            </Link>
          </li>
          <li
            className={router.pathname == '/contribution' ? 'active-link' : ''}
          >
            <Link href='/contribution'>
              <a className={styles.navbarMenuLink}>Contribute</a>
            </Link>
          </li>
          <li className={router.pathname == '/about' ? 'active-link' : ''}>
            <Link href='/about'>
              <a className={styles.navbarMenuLink}>About</a>
            </Link>
          </li>
          <li className={router.pathname == '/contact' ? 'active-link' : ''}>
            <Link href='/contact'>
              <a className={styles.navbarMenuLink}>Contact</a>
            </Link>
          </li>
          <li className={router.pathname == '/developers' ? 'active-link' : ''}>
            <Link href='/developers'>
              <a className={styles.navbarMenuLink}>Developers</a>
            </Link>
          </li>
        </ul>
        <Link href='/docs'>
          <a>
            <button className={styles.navbarButton}>How it works?</button>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

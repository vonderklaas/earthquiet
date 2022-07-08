import Link from 'next/link';
import Image from 'next/image';

import NextNProgress from 'nextjs-progressbar';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CategoryType } from '../../types/index';

const Navbar = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const response = fetch('/api/categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
    console.log(response);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link href='/'>
            <a>
              <Image src='/logo.png' alt='EARTHQUIET' width='40' height='40' />
            </a>
          </Link>
        </div>
        <ul className={styles.navbarMenu}>
          <li>
            <div className={styles.dropdown}>
              <span>Explore</span>
              <div className={styles.dropdownContent}>
                {categories &&
                  categories.map((category: CategoryType) => {
                    return (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                      >
                        <a className={styles.categoryEl}>
                          <p>{category.title}</p>
                        </a>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </li>
          <li
            className={router.pathname == '/contribution' ? 'active-link' : ''}
          >
            <Link href='/contribution'>
              <a className={styles.navbarMenuLink}>Contribution</a>
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
          <li>
            <a
              className={styles.navbarMenuSocial}
              target='_blank'
              href='https://twitter.com/garbalau_twitt'
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              className={styles.navbarMenuSocial}
              target='_blank'
              href='https://www.linkedin.com/company/earthquiet'
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              className={styles.navbarMenuSocial}
              target='_blank'
              href='https://github.com/EARTHQUIET/earthquiet'
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <NextNProgress
        color='rgb(43, 153, 122)'
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
    </nav>
  );
};

export default Navbar;

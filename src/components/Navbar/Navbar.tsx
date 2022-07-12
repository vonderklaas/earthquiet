import Link from 'next/link';

import NextNProgress from 'nextjs-progressbar';

import styles from './Navbar.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CategoryType } from '../../types/index';

const Navbar = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <Link href='/'>
            <a>
              <img src='/logo.png' alt='EARTHQUIET' />
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
        </ul>
      </div>
      <NextNProgress
        color='rgb(43, 153, 122)'
        startPosition={0}
        stopDelayMs={0}
        height={4}
        showOnShallow={false}
      />
    </nav>
  );
};

export default Navbar;

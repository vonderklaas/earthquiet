import React from 'react';
import Image from 'next/image';

import styles from './Categories.module.scss';
import Link from 'next/link';

const Categories = ({ categories }) => {
  return (
    <div className={styles.categoriesBarContainer}>
      <div className={styles.categoriesBar}>
        {categories.map((category) => {
          return (
            <Link href={`/categories/${category.slug}`}>
              <a className={styles.categoriesBarElement}>
                <Image width={20} height={20} src={category.icon.url} />
                <p>{category.title}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

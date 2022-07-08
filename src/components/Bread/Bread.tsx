import React from 'react';

import Link from 'next/link';

import styles from './Bread.module.scss';

type Bread = {
  category?: {
    categorySlug: string;
  };
};

const Bread = ({ category }: Bread) => {
  return (
    <div className={styles.breadWrapper}>
      <Link href={'/'}>
        <a>&#8617; Home</a>
      </Link>{' '}
      <span>/</span>
      <Link href={`/categories/${category.categorySlug}`}>
        <a>
          {category.categorySlug.charAt(0).toUpperCase() +
            category.categorySlug.slice(1)}
        </a>
      </Link>
    </div>
  );
};

export default Bread;

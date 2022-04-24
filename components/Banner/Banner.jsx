import React from 'react';

import styles from './Banner.module.scss';

const Banner = ({ type, message }) => {
  const getBannerType = () => {
    switch (type) {
      case 'success':
        return <div className={styles.bannerSuccess}>{message}</div>;
      case 'info':
        return <div className={styles.bannerInfo}>{message}</div>;
      case 'warning':
        return <div className={styles.bannerWarning}>{message}</div>;
      case 'danger':
        return <div className={styles.bannerDanger}>{message}</div>;
    }
  };

  return <div>{getBannerType()}</div>;
};

export default Banner;

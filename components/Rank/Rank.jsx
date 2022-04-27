import React from 'react';

import styles from './Rank.module.scss';

const Rank = ({ rank }) => {
  const rankClasses = [
    'rankOne',
    'rankTwo',
    'rankThree',
    'rankFour',
    'rankFive',
  ];

  const getRankTitle = (rank) => {
    switch (rank) {
      case 'rankOne':
        return <span></span>;
      case 'rankTwo':
        return <span></span>;
      case 'rankThree':
        return <span></span>;
      case 'rankFour':
        return <span></span>;
      case 'rankFive':
        return <span></span>;
    }
  };

  const neededRank = rankClasses.filter((rankClass) => rankClass == rank);
  return (
    <div className={styles.rankWrapper}>
      <p className={`${styles[neededRank]}`}>{getRankTitle(rank)}</p>
    </div>
  );
};

export default Rank;

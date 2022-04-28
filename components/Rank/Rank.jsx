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
        return <span>20%</span>;
      case 'rankTwo':
        return <span>40%</span>;
      case 'rankThree':
        return <span>60%</span>;
      case 'rankFour':
        return <span>80%</span>;
      case 'rankFive':
        return <span>100%</span>;
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

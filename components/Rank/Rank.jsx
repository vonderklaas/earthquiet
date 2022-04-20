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
        return <span>1</span>;
      case 'rankTwo':
        return <span>2</span>;
      case 'rankThree':
        return <span>3</span>;
      case 'rankFour':
        return <span>4</span>;
      case 'rankFive':
        return <span>5</span>;
    }
  };

  const neededRank = rankClasses.filter((rankClass) => rankClass == rank);
  return <p className={`${styles[neededRank]}`}>{getRankTitle(rank)}</p>;
};

export default Rank;

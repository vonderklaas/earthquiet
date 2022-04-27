import React from 'react';

import styles from './Heading.module.scss';

const Heading = ({ icon, alt, title, paragraph }) => {
  return (
    <div className={styles.heading}>
      <div className={styles.headingWrapper}>
        {title && <h1 className={styles.headingTitle}>{title}</h1>}
        {icon && <img className={styles.headingIcon} src={icon} alt={alt} />}
      </div>
      {paragraph && <p className={styles.headingParagraph}>{paragraph}</p>}
    </div>
  );
};

export default Heading;

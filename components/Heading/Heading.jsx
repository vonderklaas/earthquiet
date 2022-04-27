import React from 'react';

import styles from './Heading.module.scss';

const Heading = ({ icon, alt, title, paragraph }) => {
  return (
    <div className={styles.heading}>
      {icon && <img className={styles.headingIcon} src={icon} alt={alt} />}
      {title && <h1 className={styles.headingTitle}>{title}</h1>}
      {paragraph && <p className={styles.headingParagraph}>{paragraph}</p>}
    </div>
  );
};

export default Heading;

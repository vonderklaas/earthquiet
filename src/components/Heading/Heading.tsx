import React from 'react';

import Image from 'next/image';

import styles from './Heading.module.scss';

export type HeadingProps = {
  icon?: string;
  alt?: string;
  title?: string;
  paragraph?: string;
};

const Heading = ({ icon, alt, title, paragraph }: HeadingProps) => {
  return (
    <div className={styles.heading}>
      <div className={styles.headingWrapper}>
        {title && <h1 className={styles.headingTitle}>{title}</h1>}
        {icon && <Image className={styles.headingIcon} src={icon} alt={alt} />}
      </div>
      {paragraph && <p className={styles.headingParagraph}>{paragraph}</p>}
    </div>
  );
};

export default Heading;

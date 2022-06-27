import styles from './Heading.module.scss';

export type HeadingProps = {
  title?: string;
  subTitle?: string;
  paragraph?: string;
};

const Heading = ({ title, subTitle, paragraph }: HeadingProps) => {
  return (
    <div className={styles.heading}>
      <div className={styles.headingWrapper}>
        {title && <h1 className={styles.headingTitle}>{title}</h1>}
        {subTitle && <h4 className={styles.headingSubTitle}>{subTitle}</h4>}
      </div>
      {paragraph && <p className={styles.headingParagraph}>{paragraph}</p>}
    </div>
  );
};

export default Heading;

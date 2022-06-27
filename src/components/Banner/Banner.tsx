import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <span>🇺🇦</span>
      <a
        className={styles.bannerLink}
        target='_blank'
        href='https://supportukrainenow.org/'
        rel='noreferrer'
      >
        <span>www.supportukraine.co</span>
      </a>
    </div>
  );
};

export default Banner;

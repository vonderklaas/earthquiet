import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <span>We Stand With Ukraine 🇺🇦</span>
      <a
        className={styles.bannerLink}
        target='_blank'
        href='https://supportukrainenow.org/'
        rel='noreferrer'
      >
        <span>https://www.supportukraine.co/</span>
      </a>
    </div>
  );
};

export default Banner;

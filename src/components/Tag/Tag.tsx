import styles from './Tag.module.scss';

const Tag = ({ tag }: { tag: string }) => {
  return <span className={styles.tag}>#{tag}</span>;
};

export default Tag;

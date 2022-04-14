import Link from 'next/link';
import Footer from '../../components/Footer/Footer';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <main>
        <h1>404</h1>
        <div>
          <h2>Return Home?</h2>
          <button className={styles.NotFoundButton}>
            <Link href='/'>
              <a>Go Home</a>
            </Link>
          </button>
        </div>
        <div>
          <h2>Looking for something?</h2>
          <button className={styles.NotFoundButton}>
            <Link href='/contact'>
              <a>Get Support</a>
            </Link>
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;

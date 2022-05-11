import Link from 'next/link';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading title={'404'} paragraph={'Nothing here...'} />
        <div>
          <Link href='/'>
            <a>Go Home</a>
          </Link>
        </div>
        <div>
          <Link href='/contact'>
            <a>Get Support</a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Privacy</h1>
        <div>
          <h3>Data Collection</h3>
          <p>We are not collecting any data of our users (right now)</p>
          <h3>Contact</h3>
          <p>
            For any additional information, please contact us at:
            earthquite.com@gmail.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;

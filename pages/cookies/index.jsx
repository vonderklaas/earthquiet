import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Cookies = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`Cookies`}
          paragraph={`How we use and store our cookies`}
        />
        <div>
          <h3>Cookies</h3>
          <p>Currently we are not collecting any cookies</p>
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

export default Cookies;

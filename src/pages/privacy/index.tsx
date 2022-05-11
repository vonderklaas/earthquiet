import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading title={`Privacy`} paragraph={`How we manage your privacy?`} />
        <div>
          <h3>Data Collection</h3>
          <p>We are not collecting any data of our users (right now)</p>
          <h3>Contact</h3>
          <p>
            For any additional information, please contact us at:
            earthquiet.com@gmail.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;

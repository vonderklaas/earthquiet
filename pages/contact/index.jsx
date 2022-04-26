import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`Contact`}
          paragraph={`Find ways how you can contribute`}
        />
        <div>
          <p>earthquite.com@gmail.com</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

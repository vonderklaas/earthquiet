import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`Contact Us`}
          paragraph={`You need to talk with us? Sure!`}
        />
        <a href='mailto:earthquiet.com@gmail.com'>earthquiet.com@gmail.com</a>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

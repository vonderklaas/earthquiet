import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Developers = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Developers</h1>
        <div>
          <h3>API</h3>
          <p>You can use our API if needed, it is not complicated</p>
          <p>Get Categories: http://[name]/api/categories</p>
          <p>Get Problems: http://[name]/api/problems</p>
          <h3>Join Us</h3>
          <p>
            If you are developer, copywriter, designer, researcher - feel free
            to join us and help us moving forward
          </p>
          <p>
            You can send us your information and attitude here:
            earthquiet@[domain].com
          </p>
          <p>We will try to reply to you as soon as possible</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Developers;

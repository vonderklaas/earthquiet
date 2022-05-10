import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Docs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`Docs`}
          paragraph={`Here is some information that will help you understand why the site looks and works exactly the way it works.`}
        />
        <div>
          <h3>Information</h3>
          <p>In progress...</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Docs;

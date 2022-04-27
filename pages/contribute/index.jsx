import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

const Contribution = () => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={`Contribution`}
          paragraph={`Find ways how you can contribute`}
        />
        <ul>
          <li>Create start-ups to fix isssues</li>
          <li>Share website or articles with friends</li>
          <li>Build buzz in social media for your audience</li>
          <li>Participate in donation campaigns</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Contribution;

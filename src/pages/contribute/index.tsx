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
          paragraph={`We provide consequences and possible solutions to issues we write about, find ways how you can contribute`}
        />
        <div>
          <h3>We encourage you to:</h3>
          <ul>
            <li>Create projects which will grow into start-ups</li>
            <li>Share our articles and website with friends and family</li>
            <li>
              Build buzz on social media, share your thoughts with audience
            </li>
            <li>Find and participate in donation campaigns</li>
            <li>Join our team and be a part of community</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contribution;

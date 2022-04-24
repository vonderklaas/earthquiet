import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Explore World Problems and Help Resolve Them</h1>
        <div>
          <p>
            Earhhquiet.com is a free, web-based resource and community created
            platform, which is maintained by enthusiasts only. We distill the
            facts about world problems use and its effects on our lives into
            practical guidance for interested persons or for those who are
            thinking about or want to contribute and make our world a better
            place.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

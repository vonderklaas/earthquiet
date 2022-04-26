import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Heading from '../components/Heading/Heading';

import style from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.homeBackground}>
        <main>
          <Heading
            title={`The world is your oyster`}
            paragraph={`Welcome to EARTHQUITE. This world need people like you. We need
            creativeness and solutions. We need people who can collaboroate
            and solve problems. Go on, take your friends with you in this
            journey. Explore what problem we have on earth and find solutions
            to solve them. We all family here. Everywhere`}
          />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;

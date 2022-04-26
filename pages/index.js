import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import style from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.homeBackground}>
        <main>
          <div className={style.homeHeader}>
            <h1 className={style.homeHeaderTitle}>The world is your oyster</h1>
            <p className={style.homeHeaderParagraph}>
              Welcome to <b>EARTHQUITE</b>. This world need people like you. We
              need creativeness and solutions. We need people who can
              collaboroate and solve problems. Go on, take your friends with you
              in this journey. Explore what problem we have on earth and find
              solutions to solve them. We all family here. Everywhere.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Heading from '../components/Heading/Heading';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.homeBackground}>
        <main>
          <Heading
            title={'We appreciate you, visitor 🔮'}
            paragraph={`Thank you for visiting our website! Here we collect world problems and give
            people ability to explore issues and sollutions that are connected to those problems.
            We support and give ability to contribute over problems and ideally wrapping 
            startups around issues`}
          />
          <hr className={styles.hr} />
          <div className={styles.homeCard}>
            <p>
              Any aware person defenitly once googled or explored the problems
              our world has. Someone probably heared of Global Warming or
              anything else. There is a lot of resources out there, all
              containing same problems with same descriptions.{' '}
            </p>
            <p>
              Of course information is good, but EARTHQUITE decided to take to
              another level.
            </p>
            <p>
              The United Nations (UN) currently lists{' '}
              <a
                className={styles.homeLink}
                href='https://www.un.org/en/global-issues'
              >
                22 Global Issues
              </a>
              . This is not intended to be an exhaustive list. Rather, it serves
              as an overview of some of the major issues all global citizens
              should be aware of.
            </p>
            <p>
              We decided to create this platform to contain all problems in one
              place and have nice and minimalistic UX to explore those issues
            </p>
          </div>
          <Heading
            title={'Some Points'}
            paragraph={`Take a look at some of important things we do`}
          />
          <div className={styles.homeInfo}>
            <div className={styles.homeInfoColumn}>
              <h3>Verified information</h3>
              <p>
                We use only verified and world known websites and platforms
                problems to collect information about issues we post.
              </p>
              <p>
                Each problem goes through strict verification proccess and
                moderation. We will to give you fresh, actual, real issues and
                solutions to world problems.
              </p>
            </div>
            <div className={styles.homeInfoColumn}>
              <h3>We want to contribute.</h3>
              <p>
                We are not another post-oriented platform that only aims on
                content. We give developers ways to find like-minded people and
                collaborate on further solutions.
              </p>
              <p>
                We think that every problem has its solution, and we support
                people who wrapping startups around issues
              </p>
            </div>
            <div className={styles.homeInfoColumn}>
              <h3>Open-source and free</h3>
              <p>
                We are open-source and free platform for everyone to use. We
                dont run adds, banners and other comercial stuff.
              </p>
              <p>
                We exist only because of contribution of enthusiasts who want to
                change the world.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;

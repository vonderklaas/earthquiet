import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Heading from '../components/Heading/Heading';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.homeHeader}>
        <div className={styles.homeHeaderHeading}>
          <h1 className={styles.homeHeaderHeadingTitle}>Greetings!</h1>
          <p className={styles.homeHeaderHeadingParagraph}>
            Welcome to EARTHQUIET. Here we collect global world problems and
            issues. We pay very high attention on solutions, related to those
            problems. Our platform supports and give space to contribute and
            expand activities around issues
          </p>
        </div>
      </div>
      <main>
        <div className={styles.homeDescription}>
          <p>
            We are pretty sure, that most of us, at least once explored or heard
            about world problems. Someone probably heard of Global Warming or
            lack of drinking water in some countries. If so, great, but there is
            much more going on. First of all, there are a lot of resources out
            there, all containing world problems, different ratings and tops.
          </p>
          <p>
            Of course, such information is extremely useful, and allows any user
            on the Internet to join these problems and delve into their origins.
          </p>
          <p>
            However, there are also many pitfalls. Internet resources like the
            UN website or, for example, BBC, often publish some kind of news and
            even tops. However, moving from source to source, sometimes the
            integrity of the problems is lost. Each service makes its own
            mini-review, uses its own criteria and its own coordinates. There
            are simply hundreds of such sites and amateur works.
          </p>
          <p>
            At some point, it is very easy for everyone to get confused in this,
            especially considering the variety of wordings and directions of
            certain services. Someone covers only some categories, while others
            ignore. Some problems are put above others, and those that need
            attention are hidden at the bottom of their tops.
          </p>
          <p>
            We decided to create a platform that will cover the entire spectrum
            of world problems and offer a convenient format for studying them,
            and most importantly, solutions. We are not utopians, but we believe
            that all world problems are not only possible, but must be solved.
          </p>
          <p>
            Each person can take a step towards solving a problem. You don't
            have to be a scientist or a millionaire to do this. This requires a
            small group of like-minded people, a vision of the problem and its
            solutions, perseverance and a little luck. It is available to
            everyone.
          </p>
          <p>
            Communicate, find people who understand you, unite and come up with
            new solutions to already known or still not very well-known
            problems. All in your hands. Learn, create, change.
          </p>
          <p>Thank you, EARTHQUIET Team</p>
        </div>
        <Heading
          title={'Our Pillars'}
          paragraph={`What things are important for us`}
        />
        <div className={styles.homeInfo}>
          <div className={styles.homeInfoColumn}>
            <h3>Verified information</h3>
            <p>
              We only use verified information from trusted sources. We
              carefully work with the data and at the end we come to simple
              explanations and solutions available to everyone.
            </p>
            <p>
              We leave links to studies and sources so that anyone can check the
              information if they wish or continue studying outside of our
              platform.
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>Contribution</h3>
            <p>
              We don't just focus on content. We want to inspire and push to
              create solutions and improve the world. Knowledge is power. And
              this power must be used.
            </p>
            <p>
              We believe that only small groups of stubborn and creative people
              will be able to move the world's mountain of problems off the
              ground. It will crack, we're sure of it
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>Open-source and free</h3>
            <p>
              We are a free platform without any privileged paid options and any
              advertising. On our site you will not find ads, banners and
              hundreds of modal windows.
            </p>
            <p>
              We exist by our own independent will, as well as support from the
              same enthusiasts as we are
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

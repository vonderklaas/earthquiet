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
            EARTHQUIET - is a platform that collects and organizes the world's
            problems, providing a convenient and structured approach to the
            study, and most importantly, to the solution of these problems. Our
            platform encourages interest in solving these problems, and offers a
            convenient place to express your ideas and find like-minded people.
          </p>
        </div>
      </div>
      <section className={styles.homeSection}>
        <Heading title={'Motivation'} />
        <div className={styles.homeDescription}>
          <p>
            Most likely every person on this planet has faced different
            problems, sometimes these are the same problems that we all face,
            and sometimes they are completely opposite. On one planet, we water
            our gardens and flush dozens of liters of water in our souls, and
            right there we suffer from water scarcity and die of hunger.
          </p>
          <p>
            In a world with limited resources, globalization without new
            technologies is doomed. Technological innovations never came to
            mankind on their own, over time, something needs to be done for
            this. Smartphones that distract us from reality prevent us from
            noticing the fact that this very reality remains surprisingly
            old-fashioned and imperfect. Yes, progress cannot be slowed down or
            even stopped, it exists outside of time, but it can be hurried. In
            our world there are a lot of problems that need a solution, active
            development and popularization.
          </p>
          <p>
            Most businesses are now busy making money. Money that may not be
            useful just because the world in which it can be used will simply
            disappear. We must pay attention to problems, we must earn money by
            solving them, not by making them worse. Most often, new technologies
            and solutions are born in the depths of start-ups, fanatic
            scientists, a minority.
          </p>
          <p>
            A startup is the largest group of people you can infect with your
            idea of creating a new, better future. Main strength new company -
            in the ability to think in a new way: small size firm allows
            employees to think freely, and this is an advantage is even more
            important than flexibility and adaptability.
          </p>
          <p>
            We would like you to study the information that we have collected
            and think about what you could do to make this world a little
            better. Each person can take a step towards solving a problem. You
            don't have to be a scientist or a millionaire to do this. You need
            vision, perseverance and a little luck. It is available to everyone.
          </p>
          <p>
            We created this platform to inspire and support you. Find things
            that interest you, communicate and find like-minded people. The
            future is in your hands. Learn, create, change.
          </p>
          <p>Thank you, EARTHQUIET Team</p>
        </div>
        <Heading title={'What we are'} />
        <div className={styles.homeInfo}>
          <div className={styles.homeInfoColumn}>
            <h3>Information</h3>
            <p>
              We only use verified information from trusted sources. We
              carefully work with the data and at the end we come to simple
              explanations and solutions available to everyone.
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>Contribution</h3>
            <p>
              Notice, that EARTHQUIET don't just focus on content. We want to
              inspire and push people to create. Knowledge is power and this
              power must be used.
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>Open and free</h3>
            <p>
              EARTHQUIET is a free platform without any privileged paid options
              and any advertising. We exist by our own independent will and
              support from other enthusiasts
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

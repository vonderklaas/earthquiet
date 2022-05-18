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
          <h1 className={styles.homeHeaderHeadingTitle}>Hello ✋</h1>
          <p className={styles.homeHeaderHeadingParagraph}>
            EARTHQUIET - is a platform that collects and organizes the world's
            issues. Our platform encourages interest in solving these problems
            and offers a convenient place to express your ideas and be creative
            in the most amazing way.
          </p>
        </div>
      </div>
      <section className={styles.homeSection}>
        <Heading title={'Motivation'} />
        <div className={styles.homeDescription}>
          <p>
            In a world with limited resources, globalization without new
            technologies are doomed. Technological innovations never came to
            mankind on their own, over time. We need all can become a part of
            this innovation processes. Take a look on us, smartphone distracts
            us from reality, we live in. It prevents us from noticing the fact
            that this reality remains surprisingly old-fashioned and imperfect.
            In our world there are a lot of issues that need solutions, active
            development and popularization. Yes, progress cannot be slowed down
            or even stopped, it exists outside of time, but it can be hurried.
          </p>
          <p>
            Most businesses are now busy making money. Money that can be
            completely useless, because the world we know may disappear. We face
            a climate crisis, overpopulation, hunger, diseases, and they are
            slowly destroying us. We must pay attention to issues which surround
            us, and try to resolve them. Most often, new technologies and
            solutions are born in the depths of start-ups, by fanatic
            scientists, a minority.
          </p>
          <p>
            A startup is the largest group of people you can infect with your
            idea of creating a new, better future. Main strength new company -
            in the ability to think in a new way: small size firm allows
            employees to think freely, and this is an advantage which is even
            more important than flexibility and adaptability.
          </p>
          <p>
            A startup is the largest group of people you can infect with your
            idea of creating a new, better future. Main strength new company -
            in the ability to think in a new way: small size firm allows
            employees to think freely, and this is an advantage which is even
            more important than flexibility and adaptability.
          </p>
          <p>
            We created this platform to inspire and support you. Find things
            that interest you, communicate and find like-minded people. The
            future is in your hands. Learn, create, change.
          </p>
          <p>Thank you, EARTHQUIET Team</p>
        </div>
        <Heading title={'Pillars'} />
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

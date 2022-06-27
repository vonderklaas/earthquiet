import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Heading from '../components/Heading/Heading';

import Link from 'next/link';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.homeHeader}>
        <div className={styles.homeHeaderHeading}>
          <h1 className={styles.homeHeaderHeadingTitle}>Hello 🌍!</h1>
          <p className={styles.homeHeaderHeadingParagraph}>
            EARTHQUIET is a platform that collects global problems from all
            around the world into one place. We often provide consequences and
            possible solutions or ideas to explore. We inspire people to think,
            to invest, to research and to act.
          </p>
        </div>
      </div>
      <section className={styles.homeSection}>
        <Heading subTitle={'Motivation'} />
        <div className={styles.homeDescription}>
          <p>
            We know from history that technological innovations never came to
            humanity on their own, over time, someone has to work on it. Today,
            people are waking up. They came to a conscious existence. They
            notice the imperfections of our society and our environment, they
            want to do something with it. We need everyone to be a part of this
            innovation process and act. Look at us, the smartphone distracts us
            from the reality we live in. It prevents us from noticing that this
            reality remains surprisingly old-fashioned and imperfect. In our
            world, there are a lot of questions and problems that need to be
            addressed, upon which solutions will develop actively. Future is in
            our hands. The hand of human.
          </p>
          <p>
            Many people who have power and established systems are now busy
            making money. Money, that can be completely useless in that world
            which can fade away. We know, our Earth can degrade because of our
            ignorance and dellusion. Humanity is facing climate crisis, armed
            conflicts, corruption, overpopulation, hunger, disease, and much
            more of other problems that slowly but surely destroying us. We must
            pay attention to the problems that surround us and try to solve
            them. These decisions will serve the formation of a new world, a
            world that has overcome hunger, war and division.
          </p>
          <p>
            Most often, new technologies and cultural shifts are born in the
            depths of such startups. Sometimes world pay attention to fanatics
            of their craft, self-taught, enthusiasts, scientists, a minority.
            The most modern attempt to gather like-minded people in one place
            results in such a thing as startup. A startup is the largest group
            of people you can infect with your the idea. The main strength of
            the new company is in the ability to think in a new way. The small
            size of the firm allows employees to think freely, and this is an
            advantage that even more important than flexibility or adaptability.
          </p>
          <p>
            We created this platform to bring together innovators, visionaries,
            open-minded thinkers, scientists, fanatics, enthusiasts and just
            people who want to get to a better and brighter future. Go ahead,
            explore problems and ideas, communicate and find like-minded people,
            the future is in our hands, and we need to start today.
          </p>
          <p>
            Thank you, EARTHQUIET{' '}
            <Link href='/team'>
              <a>team</a>
            </Link>
          </p>
        </div>
        <Heading subTitle={'Vision'} />
        <div className={styles.homeInfo}>
          <div className={styles.homeInfoColumn}>
            <h3>research</h3>
            <p>
              Our articles are based only on verified sources. We explore each
              problem and try to get to the core. We provide consequences and
              possible solutions as simple and understandable thoughts.
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>contribute</h3>
            <p>
              We are not only focusing on organizing the world's problems. We
              want to inspire people and push them to action. Knowledge is
              power, but it needs to be used. Feel free to share your ideas,
              contribute and create.
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>not about money</h3>
            <p>
              EARTHQUIET is a non-profit and free platform without any
              privileges or paid options. We exist only because of our own
              conscious will. We are independent, but always accept help. Feel
              free to support us <Link href='/donate'>here</Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

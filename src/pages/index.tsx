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
          <h1 className={styles.homeHeaderHeadingTitle}>
            “The greatest danger to our future is apathy.” - Jane Goodall
          </h1>
          <p className={styles.homeHeaderHeadingParagraph}>
            EARTHQUIET - is a platform that collects global and not only global
            problems from around the world and all spheres. We inspire people to
            explore these issues, create solutions, invest and spread. Every
            step taken towards a solution is a step towards making our world a
            better place.
          </p>
        </div>
      </div>
      <section className={styles.homeSection}>
        <Heading subTitle={'Motivation'} />
        <div className={styles.homeDescription}>
          <p>
            In the world we live in, a world with limited resources, further
            globalization without new technologies is doomed. We know from
            history that technological innovations and progress never came to
            humanity on their own, over time, someone has to work on it. People
            are waking up more and more and coming to a conscious existence,
            they notice the imperfections of our society and our environment,
            they want to help. We need everyone to be a part of this innovation
            process. Look at us, the smartphone distracts us from the reality we
            live in. It prevents us from noticing that this reality remains
            surprisingly old-fashioned and imperfect. In our world, there are a
            lot of questions and problems that need to be addressed, actively
            developed and popularized. It is in our hands, the hands of an
            active and informed population.
          </p>
          <p>
            Many people who have power, established systems and subordinate
            people are now busy making money. Money that can be completely
            useless, in that world, we know, can disappear. Humanity is facing
            climate crisis, armed conflicts, corruption, overpopulation, hunger,
            disease, urbanization, the need to switch to alternative energy and
            other problems that slowly but surely destroying us. We must pay
            attention to the problems that surround us and try to solve them.
            These decisions will serve the formation of a new world, a world
            that has overcome hunger, war and division.
          </p>
          <p>
            The most modern attempt to gather like-minded people in one place
            results in such a thing as a startup. Most often, new technologies
            and progressive activities solutions are born in the depths of such
            startups, sometimes by fanatics, self-taught, enthusiasts,
            scientists, a minority. A startup is the largest group of people you
            can infect with your the idea of creating a new, better future. The
            main strength of the new company is in the ability to think in a new
            way: the small size of the firm allows employees to think freely,
            and this is an advantage that even more important than flexibility
            and adaptability.
          </p>
          <p>
            We created this platform to bring together innovators and
            visionaries, amateurs and professionals, scientists and fanatics,
            enthusiasts and just people who want to help, want to take a step
            towards a better future. Explore problems and ideas, communicate and
            find like-minded people, the future is in our hands, and we need to
            start today. Now.
          </p>
          <p>
            Thank you, EARTHQUIET{' '}
            <Link href='/team'>
              <a>Team</a>
            </Link>
          </p>
        </div>
        <Heading subTitle={'Vision'} />
        <div className={styles.homeInfo}>
          <div className={styles.homeInfoColumn}>
            <h3>Information</h3>
            <p>
              Our articles are based only on verified sources. we study each
              problem, trying to fit the main idea, consequences and possible
              solutions into simple and understandable ideas.
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>Contribution</h3>
            <p>
              Note that we are not just focusing on gathering facts and
              organizing the world's problems. We want to inspire people and
              push them to action. Knowledge is power, and this power must be
              used for good.
            </p>
          </div>
          <div className={styles.homeInfoColumn}>
            <h3>Not for money</h3>
            <p>
              EARTHQUIET is non-profit and s free platform without any
              privileges and paid options. We exist by our own conscious will
              and independently, accepting support from enthusiasts and
              supporters.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

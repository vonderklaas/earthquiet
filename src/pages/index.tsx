import Navbar from '../components/Navbar/Navbar';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
// import Heading from '../components/Heading/Heading';

import Link from 'next/link';

import styles from './Home.module.scss';
import { getCategories } from '../hooks/getCategories';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData.categories;

  return {
    props: { categories },
  };
};

const Home = ({ categories }) => {
  return (
    <div className={styles.homeWrapper}>
      <Navbar />
      <Categories categories={categories} />
      <div className={styles.homeHeader}>
        <p className={styles.homeHeaderParagraph}>
          It is a platform where the world's problems are collected, discussed
          and shared. We provide information about the consequences and
          solutions to current issues. We inspire people to think, invest, learn
          and act. Our team feels that together, the impossible is possible.
        </p>
      </div>
      <section className={styles.homeSection}>
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
              <a>Team</a>
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

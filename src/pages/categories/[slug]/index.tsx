import Link from 'next/link';
import { GetServerSideProps } from 'next';

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';

import styles from '../Categories.module.scss';

import { TopicShortType, CategoryTitleType } from '../../../types/index';

import { getTopicShort } from '../../../hooks/getTopicShort';
import { getCategoryTitle } from '../../../hooks/getCategoryTitle';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug: string | string[] = context.query.slug;
  const topicsData = await getTopicShort(pageSlug);
  const categoriesData = await getCategoryTitle(pageSlug);
  const topics = topicsData.improvements;
  const category = categoriesData.category;

  return {
    props: { topics, category },
  };
};

const Category = ({
  topics,
  category,
}: {
  topics: TopicShortType[];
  category: CategoryTitleType;
}) => {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Link href={'/'}>&#8617; Home</Link>
        </div>
        <Heading title={`${category.title}`} />
        <p>{category.description}</p>
        {topics.length === 0 ? (
          <div>No topics</div>
        ) : (
          <>
            <div className={styles.topics}>
              {topics.map((topic) => {
                return (
                  <Link
                    key={topic.slug}
                    href={`/topics/${topic.categorySlug}/${topic.slug}`}
                  >
                    <a className={styles.topic} key={topic.slug}>
                      <h3 className={styles.topicTitle}>{topic.title}</h3>
                      <p>{topic.description}</p>
                      <p className={styles.topicDescription}>{topic.date}</p>
                    </a>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Category;

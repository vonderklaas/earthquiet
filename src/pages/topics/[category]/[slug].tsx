import { useEffect, useRef, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import Reactmarkdown from 'react-markdown';
import { GetServerSideProps } from 'next';

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';
import Comments from '../../../components/Comments';
import Bread from '../../../components/Bread/Bread';

import styles from './Topics.module.scss';
import { TopicLongType } from '../../../types/index';
import { getTopicLong } from '../../../hooks/getTopicLong';

import readingTime from '../../../lib/readingTime';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const topicData = await getTopicLong(pageSlug);
  const topic = topicData.improvements;

  return {
    props: { topic },
  };
};

const Topic = ({ topic }: { topic: TopicLongType[] }) => {
  const [isComments, setIsComments] = useState(false);
  const [timeToRead, setTimeToRead] = useState(0);
  const topicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeToRead(readingTime(topicRef.current?.innerText!));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {topic.map((topic: TopicLongType) => {
          return (
            <div key={topic.slug}>
              <Bread category={topic} />
              <Heading title={topic.title} paragraph={topic.description} />
              <div className={styles.timeToRead}>
                <FaClock />
                <span>{timeToRead} min to read</span>
              </div>
              <div ref={topicRef} className={styles.topic}>
                <div className={styles.topicBlock}>
                  <h3>General</h3>
                  <Reactmarkdown>{topic.general}</Reactmarkdown>
                </div>
                <div className={styles.topicBlock}>
                  <h3>Consequences</h3>
                  <Reactmarkdown>{topic.consequences}</Reactmarkdown>
                </div>
                <div className={styles.topicBlock}>
                  <h3>Improvements</h3>
                  <Reactmarkdown>{topic.improvements}</Reactmarkdown>
                </div>
              </div>
            </div>
          );
        })}
        <Heading title={'Comments'} />
        <button onClick={() => setIsComments(!isComments)}>
          {isComments ? 'Hide Comments' : 'Show Comments'}
        </button>
        {isComments && <Comments />}
      </main>
      <Footer />
    </>
  );
};

export default Topic;

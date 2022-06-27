import { useEffect, useRef, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import Reactmarkdown from 'react-markdown';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';
import Comments from '../../../components/Comments';
import Tag from '../../../components/Tag/Tag';

import styles from './Issue.module.scss';
import { IssueFull } from '../../../types/Issues';
import { useIssueFull } from '../../../hooks/useIssueFull';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const issuesData = await useIssueFull(pageSlug);
  const issue = issuesData.solutions;

  return {
    props: { issue },
  };
};

const Issue = ({ issue }: { issue: IssueFull[] }) => {
  const [timeToRead, setTimeToRead] = useState(0);
  const issueRef = useRef<HTMLDivElement>(null);

  const readingTime = () => {
    const wordsPerMinute = 265;
    const issueText = issueRef.current?.innerText!;
    const words = issueText.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return time;
  };

  useEffect(() => {
    setTimeToRead(readingTime());
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {issue.map((issue: IssueFull) => {
          return (
            <div key={issue.slug}>
              <div className={styles.timeToRead}>
                <FaClock />
                <span>
                  {timeToRead}
                  {timeToRead > 1 ? ' minutes to read' : 'minute to read'}
                </span>
              </div>
               
              {/* <div className={styles.issueTags}>
                {issue.keywords.split(', ').map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div> */}
              <Heading title={issue.title} paragraph={issue.description} />
              <div ref={issueRef} className={styles.issue}>
                <div className={styles.issueBlock}>
                  <Reactmarkdown>{issue.generalText}</Reactmarkdown>
                </div>
                <div className={styles.issueBlock}>
                  <h3>Consequences</h3>
                  <Reactmarkdown>{issue.consequences}</Reactmarkdown>
                </div>
                <div className={styles.issueBlock}>
                  <h3>Improvements</h3>
                  <Reactmarkdown>{issue.solutions}</Reactmarkdown>
                </div>
              </div>
            </div>
          );
        })}
        <Heading subTitle={'Lets talk'} />
        <div className={styles.comments}>
          <Comments />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Issue;

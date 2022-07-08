import { useEffect, useRef, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import Reactmarkdown from 'react-markdown';
import { GetServerSideProps } from 'next';

import Link from 'next/link';

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';
import Comments from '../../../components/Comments';

import styles from './Topics.module.scss';
import { IssueFull } from '../../../types/Issues';
import { useIssueFull } from '../../../hooks/useIssueFull';

import readingTime from '../../../lib/readingTime';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const issuesData = await useIssueFull(pageSlug);
  const issue = issuesData.improvements;

  return {
    props: { issue },
  };
};

const Issue = ({ issue }: { issue: IssueFull[] }) => {
  const [isComments, setIsComments] = useState(false);
  const [timeToRead, setTimeToRead] = useState(0);
  const issueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeToRead(readingTime(issueRef.current?.innerText!));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {issue.map((issue: IssueFull) => {
          return (
            <div key={issue.slug}>
              <div className={styles.breadCrumbs}>
                <Link href={'/'}>Home</Link> /{' '}
                <Link href={`/categories/${issue.categorySlug}`}>
                  {issue.categorySlug.charAt(0).toUpperCase() +
                    issue.categorySlug.slice(1)}
                </Link>
              </div>
              <Heading title={issue.title} paragraph={issue.description} />
              <div className={styles.timeToRead}>
                <FaClock />
                <span>
                  {timeToRead}
                  {timeToRead > 1 ? ' minutes to read' : 'minute to read'}
                </span>
              </div>
              <div ref={issueRef} className={styles.issue}>
                <div className={styles.issueBlock}>
                  <h3>General</h3>
                  <Reactmarkdown>{issue.general}</Reactmarkdown>
                </div>
                <div className={styles.issueBlock}>
                  <h3>Consequences</h3>
                  <Reactmarkdown>{issue.consequences}</Reactmarkdown>
                </div>
                <div className={styles.issueBlock}>
                  <h3>Improvements</h3>
                  <Reactmarkdown>{issue.improvements}</Reactmarkdown>
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

export default Issue;

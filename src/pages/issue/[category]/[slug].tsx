import { gql, GraphQLClient } from 'graphql-request';
import Reactmarkdown from 'react-markdown';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';
import Tag from '../../../components/Tag/Tag';
import styles from './Issue.module.scss';

import { GetServerSideProps } from 'next';

import Comments from '../../../components/Comments';

import { useRouter } from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { FaClock } from 'react-icons/fa';

import { IssueFull } from '../../../types/Issues';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const url = process.env.API_CONTENT_URL;
  // @ts-expect-error
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const query = gql`
    query ($pageSlug: String!) {
      issues(where: { slug: $pageSlug }) {
        title
        description
        slug
        generalText
        consequences
        solutions
        date
        keywords
        categorySlug
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  const issuesData = await graphQLClient.request(query, vars);
  const issue = issuesData.issues;

  return {
    props: { issue },
  };
};

const Issue = ({ issue }: { issue: IssueFull[] }) => {
  const [timeToRead, setTimeToRead] = useState(0);
  const router = useRouter();
  const commentsUrl = `${router.query.category}__${router.query.slug}`;

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
                  Time to read: {timeToRead}{' '}
                  {timeToRead > 1 ? 'minutes' : 'minute'}
                </span>
              </div>
              <div className={styles.issueTags}>
                {issue.keywords.split(', ').map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
              <Heading title={issue.title} paragraph={issue.description} />
              <div ref={issueRef} className={styles.issue}>
                <div className={styles.separator}> </div>
                <div className={styles.issueBlock}>
                  <h3>General</h3>
                  <Reactmarkdown>{issue.generalText}</Reactmarkdown>
                </div>
                <div className={styles.issueBlock}>
                  <h3>Consequences</h3>
                  <Reactmarkdown>{issue.consequences}</Reactmarkdown>
                </div>
                <div className={styles.issueBlock}>
                  <h3>Solutions</h3>
                  <Reactmarkdown>{issue.solutions}</Reactmarkdown>
                </div>
              </div>
            </div>
          );
        })}
        <Heading
          title={'Communicate'}
          paragraph={`Maybe someone has already created a repo for this?`}
        />
        <div className={styles.comments}>
          <Comments commentsUrl={commentsUrl} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Issue;

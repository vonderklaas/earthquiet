import { gql, GraphQLClient } from 'graphql-request';
import Reactmarkdown from 'react-markdown';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';
import Tag from '../../../components/Tag/Tag';
import styles from './Problem.module.scss';

import Comments from '../../../components/Comments';

import { useRouter } from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { FaClock } from 'react-icons/fa';

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const url = process.env.API_CONTENT_URL;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const query = gql`
    query ($pageSlug: String!) {
      problems(where: { slug: $pageSlug }) {
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

  const data = await graphQLClient.request(query, vars);
  const problem = data.problems;

  return {
    props: { problem },
  };
};

const Category = ({ problem }) => {
  const [timeToRead, setTimeToRead] = useState(0);
  const router = useRouter();
  const commentsUrl = `${router.query.category}__${router.query.slug}`;

  const problemRef = useRef();

  const readingTime = () => {
    const wordsPerMinute = 265;
    const issueText = problemRef.current.innerText;
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
        {problem.map((problem) => {
          return (
            <div key={problem.slug}>
              <div className={styles.timeToRead}>
                <FaClock />
                <span>{timeToRead} min read</span>
              </div>
              <Heading title={problem.title} paragraph={problem.description} />
              <div ref={problemRef} className={styles.problem}>
                <div className={styles.problemBlock}>
                  <h3>Keywords</h3>
                  <div className={styles.problemTags}>
                    {problem.keywords.split(', ').map((tag) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
                <div className={styles.problemBlock}>
                  <h3>General</h3>
                  <Reactmarkdown children={problem.generalText} />
                </div>
                <div className={styles.problemBlock}>
                  <h3>Consequences</h3>
                  <Reactmarkdown children={problem.consequences} />
                </div>
                <div className={styles.problemBlock}>
                  <h3>Solutions</h3>
                  <Reactmarkdown children={problem.solutions} />
                </div>
              </div>
            </div>
          );
        })}
        <Heading
          title={'Do the talking'}
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

export default Category;

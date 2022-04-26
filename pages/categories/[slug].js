import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Comments from '../../components/Comments';

import styles from './Categories.module.scss';

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
      problems(where: { categorySlug: $pageSlug }) {
        title
        description
        slug
        categorySlug
        rank
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, vars);
  const problems = data.problems;

  return {
    props: { problems, pageSlug },
  };
};

const Category = ({ problems, pageSlug }) => {
  return (
    <>
      <Navbar />
      <div className={styles.problemsBackground}>
        <main>
          <div className={styles.problemsHeader}>
            <h1 className={styles.problemsHeaderTitle}>
              {pageSlug.toUpperCase()} Problems
            </h1>
            <p className={styles.problemsHeaderParagraph}>
              Please choose a category down below and explore what problems and
              isuses you can solve and contribute to
            </p>
          </div>
          <div className={styles.problems}>
            {problems.map((problem) => {
              return (
                <Link href={`/problem/${problem.categorySlug}/${problem.slug}`}>
                  <a className={styles.problem} key={problem.slug}>
                    <h2 className={styles.problemTitle}>{problem.title}</h2>
                    <p className={styles.problemDescription}>
                      {problem.description}
                    </p>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className={styles.problemsComments}>
            <h3>Comments</h3>
            <Comments categorySlug={pageSlug} />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Category;

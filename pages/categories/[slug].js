import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
    props: { problems },
  };
};

const Category = ({ problems }) => {
  if (problems.length === 0) {
    return (
      <>
        <Navbar />
        <main>
          <h1>No problems here</h1>
          <p>
            Go back to
            <Link href={`/categories`}>
              <a>
                <b> Categories</b>
              </a>
            </Link>
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <h1>Problems</h1>
        <div className={styles.problems}>
          {problems.map((problem) => {
            return (
              <div className={styles.problem} key={problem.slug}>
                <Link href={`/problem/${problem.categorySlug}/${problem.slug}`}>
                  <a>
                    <h2 className={styles.problemTitle}>{problem.title}</h2>
                  </a>
                </Link>
                <p className={styles.problemDescription}>
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;

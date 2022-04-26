import { gql, GraphQLClient } from 'graphql-request';
import Reactmarkdown from 'react-markdown';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Rank from '../../../components/Rank/Rank';
import styles from './Problem.module.scss';
import Link from 'next/link';

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
        rank
        generalText
        consequences
        solutions
        references
        donations
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
  return (
    <>
      <Navbar isProblemPage={true} />
      <div className={styles.problemBackground}>
        <main>
          {problem.map((problem) => {
            return (
              <div key={problem.slug}>
                <div className={styles.problemHeader}>
                  <h1 className={styles.problemHeaderTitle}>{problem.title}</h1>
                </div>

                <div className={styles.problemRank}>
                  <h3>Rank</h3>
                  <Rank rank={problem.rank} />
                </div>

                <div className={styles.problemDescription}>
                  <h3>Description</h3>
                  <Reactmarkdown children={problem.description} />
                </div>
                <div className={styles.problemIdea}>
                  <h3>Idea</h3>
                  <Reactmarkdown children={problem.generalText} />
                </div>
                <div className={styles.problemConsequences}>
                  <h3>Consequences</h3>
                  <Reactmarkdown children={problem.consequences} />
                </div>
                <div className={styles.problemSolutions}>
                  <h3>Solutions</h3>
                  <Reactmarkdown children={problem.solutions} />
                </div>
                <div className={styles.problemReferences}>
                  <h3>References</h3>
                  <Reactmarkdown children={problem.references} />
                </div>
                <div className={styles.problemDonations}>
                  <h3>Donations</h3>
                  <Reactmarkdown children={problem.donations} />
                </div>
              </div>
            );
          })}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Category;

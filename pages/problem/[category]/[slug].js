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
        categorySlug
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
  return (
    <>
      <Navbar isProblemPage={true} />
      <section className={styles.problems}>
        {problems.map((problem) => {
          return (
            <div className={styles.problem} key={problem.slug}>
              <h1 className={styles.problemTitle}>{problem.title}</h1>
              <div className={styles.problemRank}>
                <div className={styles.problemRankTitle}>
                  <h3>Rank</h3>
                  <span className={styles.problemRankLink}>
                    <Link href='/documentation'>
                      <a>How we rank?</a>
                    </Link>
                  </span>
                </div>
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
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default Category;

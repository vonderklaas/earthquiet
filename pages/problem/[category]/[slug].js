import { gql, GraphQLClient } from 'graphql-request';
import Reactmarkdown from 'react-markdown';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import styles from './Problem.module.scss';

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
        body
        aftermath
        solutions
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
      <Navbar />
      <main>
        {problems.map((problem) => {
          return (
            <div className={styles.problem} key={problem.slug}>
              <h1>{problem.title}</h1>
              <div>
                <h3>Description</h3>
                <Reactmarkdown children={problem.description} />
              </div>
              <div>
                <h3>Body</h3>
                <Reactmarkdown children={problem.body} />
              </div>
              <div>
                <h3>Aftermath</h3>
                <Reactmarkdown children={problem.aftermath} />
              </div>
              <div>
                <h3>Solutions</h3>
                <Reactmarkdown children={problem.solutions} />
              </div>
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Category;

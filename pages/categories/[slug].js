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
  const query2 = gql`
    query ($pageSlug: String!) {
      categories(where: { slug: $pageSlug }) {
        color {
          hex
        }
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  const categoryColordata = await graphQLClient.request(query2, vars);
  const data = await graphQLClient.request(query, vars);
  const problems = data.problems;
  const catColor = categoryColordata.categories[0].color.hex;

  return {
    props: { problems, pageSlug, catColor },
  };
};

const Category = ({ problems, pageSlug, catColor }) => {
  console.log(catColor);
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
        <p>
          These are all the problems we currently have for selected category,
          you can go throgh them and explore more details
        </p>
        <div className={styles.problems}>
          {problems.map((problem) => {
            return (
              <Link href={`/problem/${problem.categorySlug}/${problem.slug}`}>
                <a
                  style={{ backgroundColor: `${catColor}` }}
                  className={styles.problem}
                  key={problem.slug}
                >
                  <h2 className={styles.problemTitle}>{problem.title}</h2>
                  <p className={styles.problemDescription}>
                    {problem.description}
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
        <div>
          <h3>Comments</h3>
          <Comments categorySlug={pageSlug} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;

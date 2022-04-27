import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Comments from '../../components/Comments';
import Heading from '../../components/Heading/Heading';
import Rank from '../../components/Rank/Rank';

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
        date
        keywords
      }
    }
  `;

  const query2 = gql`
    query ($pageSlug: String!) {
      category(where: { slug: $pageSlug }) {
        icon {
          url
        }
      }
    }
  `;

  const vars = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, vars);
  const catData = await graphQLClient.request(query2, vars);
  const problems = data.problems;
  const catDataProbs = catData.category.icon;

  return {
    props: { problems, pageSlug, catDataProbs },
  };
};

const Category = ({ problems, pageSlug, catDataProbs }) => {
  console.log(catDataProbs.url);
  return (
    <>
      <Navbar />
      <main>
        <Heading
          icon={catDataProbs.url}
          alt={pageSlug}
          title={`${pageSlug.toUpperCase()}`}
          paragraph={`Here are the problems of category ${pageSlug.toUpperCase()}. We constantly work on our site and if a problem that you are not interested in is not yet presented, be sure that it will appear soon.`}
        />
        {problems.length === 0 && <div>No problems...</div>}
        <div className={styles.problems}>
          {problems &&
            problems.map((problem) => {
              return (
                <Link
                  key={problem.slug}
                  href={`/problem/${problem.categorySlug}/${problem.slug}`}
                >
                  <a className={styles.problem} key={problem.slug}>
                    <h3 className={styles.problemTitle}>{problem.title}</h3>
                    <p className={styles.problemDescription}>
                      {problem.description}
                    </p>
                    <p className={styles.problemTags}>
                      {problem.keywords.split(', ').map((tag) => {
                        return (
                          <span className={styles.problemTagsTag}>#{tag}</span>
                        );
                      })}
                    </p>
                    <p>Updated: {problem.date}</p>
                    <h3>Complexity</h3>
                    <Rank rank={problem.rank} />
                  </a>
                </Link>
              );
            })}
        </div>
        <Heading title={'Comments'} />
        <div className={styles.comments}>
          <Comments categorySlug={pageSlug} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;

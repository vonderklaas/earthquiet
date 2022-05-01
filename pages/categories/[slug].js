import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';
import Tag from '../../components/Tag/Tag';

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
  return (
    <>
      <Navbar />
      <main>
        <Heading
          icon={catDataProbs.url}
          alt={pageSlug}
          title={`${pageSlug.toUpperCase()}`}
          paragraph={`Keep in mind that we are constantly working on updating content. If the problem you are interested in is not yet on this list, be aware that it will appear as soon as possible. However, you can speed up this process if you contact us personally.`}
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
                      {problem.keywords.split(', ').map((tag) => (
                        <Tag key={tag} tag={tag} />
                      ))}
                    </p>
                    <p>Last Updated: {problem.date}</p>
                  </a>
                </Link>
              );
            })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;

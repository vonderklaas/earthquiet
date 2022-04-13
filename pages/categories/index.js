// Importing GraphQL
import Link from 'next/link';
import { gql, GraphQLClient } from 'graphql-request';
import Navbar from '../../components/Navbar/Navbar';

import styles from './Categories.module.scss';

export const getStaticProps = async (context) => {
  const url = process.env.API_CONTENT_URL;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const query = gql`
    query Categories {
      categories {
        title
        slug
        description
        image {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const categories = data.categories;

  return {
    props: { categories },
  };
};

const Categories = ({ categories }) => {
  console.log(categories);

  return (
    <>
      <Navbar />
      <main>
        <h1>Categories</h1>
        <div className={styles.categories}>
          {categories &&
            categories.map((category) => {
              return (
                <div className={styles.category} key={category.slug}>
                  <img
                    className={styles.categoryImage}
                    src={category.image.url}
                    alt={category.title}
                  />

                  <div className={styles.categoryText}>
                    <div>
                      <Link href={`/categories/${category.slug}`}>
                        <a className={styles.categoryTextIssues}>
                          View Problems
                        </a>
                      </Link>
                      <h3 className={styles.categoryTextTitle}>
                        {category.title}
                      </h3>
                      <p className={styles.categoryTextDescription}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Categories;

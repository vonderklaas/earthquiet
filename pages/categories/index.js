import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
  return (
    <>
      <Navbar />
      <main>
        <h1>Categories</h1>
        <p>
          Please choose a category down below and explore what problems and
          isuses you can solve and contribute to
        </p>
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
                  <div>
                    <Link href={`/categories/${category.slug}`}>
                      <a>
                        <h3 className={styles.categoryTitle}>
                          {category.title}
                        </h3>
                      </a>
                    </Link>
                    <p className={styles.categoryDescription}>
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Categories;

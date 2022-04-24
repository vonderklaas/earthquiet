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
        color {
          hex
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
            categories
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((category) => {
                return (
                  <Link href={`/categories/${category.slug}`}>
                    <a className={styles.category} key={category.slug}>
                      <div
                        style={{ backgroundColor: `${category.color.hex}` }}
                        className={styles.categoryColor}
                      >
                        <h3>{category.title}</h3>
                      </div>
                      <div>
                        <p className={styles.categoryDescription}>
                          {category.description}
                        </p>
                      </div>
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

export default Categories;

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
      <div className={styles.categoriesBackground}>
        <main>
          <div className={styles.categoriesHeader}>
            <h1 className={styles.categoriesHeaderTitle}>Categories</h1>
            <p className={styles.categoriesHeaderParagraph}>
              Please choose a category down below and explore what problems and
              isuses you can solve and contribute to
            </p>
          </div>
          <div className={styles.categories}>
            {categories &&
              categories.map((category) => {
                return (
                  <Link href={`/categories/${category.slug}`}>
                    <a className={styles.category} key={category.slug}>
                      <h3 className={styles.categoryTitle}>{category.title}</h3>
                      <p className={styles.categoryDescription}>
                        {category.description}
                      </p>
                    </a>
                  </Link>
                );
              })}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Categories;

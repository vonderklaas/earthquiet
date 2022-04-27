import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

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
        icon {
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
        <Heading
          title={'Explore by category'}
          paragraph={`You can choose the category you are interested in and study what world problems belong to it`}
        />
        <div className={styles.categories}>
          {categories &&
            categories.map((category) => {
              return (
                <Link key={category.slug} href={`/categories/${category.slug}`}>
                  <a className={styles.category} key={category.slug}>
                    <img
                      className={styles.categoryIcon}
                      src={category.icon.url}
                      alt={category.slug}
                    />
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
      <Footer />
    </>
  );
};

export default Categories;

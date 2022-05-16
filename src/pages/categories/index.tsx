import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

import Image from 'next/image';

import styles from './Categories.module.scss';

import { GetStaticProps } from 'next';

import { Categories, Category } from '../../types/Categories';
import { IssueId } from '../../types/Issues';

export const getStaticProps: GetStaticProps = async () => {
  const url = process.env.API_CONTENT_URL;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const categoriesQuery = gql`
    query {
      categories {
        title
        slug
        id
        description
        icon {
          url
        }
      }
    }
  `;

  const issuesQuery = gql`
    query {
      issues {
        categoryParent {
          id
        }
      }
    }
  `;

  const categoriesData = await graphQLClient.request(categoriesQuery);
  const issuesData = await graphQLClient.request(issuesQuery);
  const categories = categoriesData.categories;
  const issuesIds = issuesData.issues;

  // Adding property with amount of issues under one category
  categories.map((category: Category) => {
    category.issues = 0;
    issuesIds.map((issuesIdsElement: IssueId) => {
      if (issuesIdsElement.categoryParent.id === category.id) {
        category.issues++;
      }
    });
  });

  return {
    props: { categories },
  };
};

const Categories = ({ categories }: Categories) => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          title={'Categories'}
          paragraph={`Choose a category that is close and interesting to you and study what world issues belong to this category.`}
        />
        <div className={styles.categories}>
          {categories.map((category: Category) => {
            return (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <a className={styles.category} key={category.slug}>
                  <Image
                    className={styles.categoryIcon}
                    src={category.icon.url}
                    alt={category.slug}
                    width='60'
                    height='60'
                  />
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                  <p>Issues: {category.issues}</p>
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

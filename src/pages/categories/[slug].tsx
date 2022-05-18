import { gql, GraphQLClient } from 'graphql-request';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';
import Tag from '../../components/Tag/Tag';

import styles from './Categories.module.scss';

import { GetServerSideProps } from 'next';

import { IssueShort, IssuesArray } from '../../types/Issues';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const url = process.env.API_CONTENT_URL;
  // @ts-ignore
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const issuesQuery = gql`
    query ($pageSlug: String!) {
      issues(where: { categorySlug: $pageSlug }) {
        title
        description
        slug
        categorySlug
        date
        keywords
      }
    }
  `;

  const categoriesQuery = gql`
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

  const issuesData = await graphQLClient.request(issuesQuery, vars);
  const categoriesData = await graphQLClient.request(categoriesQuery, vars);
  const issues: IssuesArray = issuesData.issues;
  const categoryIcon = categoriesData.category.icon;

  return {
    props: { issues, pageSlug, categoryIcon },
  };
};

const Category = ({
  issues,
  pageSlug,
  categoryIcon,
}: {
  issues: IssueShort[];
  pageSlug: string;
  categoryIcon: {
    url: string;
  };
}) => {
  return (
    <>
      <Navbar />
      <main>
        <Heading
          icon={categoryIcon.url}
          alt={pageSlug}
          title={`${pageSlug.toUpperCase()}`}
          paragraph={`Keep in mind that we are constantly working on updating content. If the issue you are interested in is not yet on this list, be aware that it will appear as soon as possible. However, you can speed up this process if you contact us personally.`}
        />
        {issues.length === 0 ? (
          <div>No issues</div>
        ) : (
          <>
            <p>Issues: {issues.length}</p>
            <div className={styles.issues}>
              {issues.map((issue) => {
                return (
                  <Link
                    key={issue.slug}
                    href={`/issue/${issue.categorySlug}/${issue.slug}`}
                  >
                    <a className={styles.issue} key={issue.slug}>
                      <p className={styles.issueDescription}>{issue.date}</p>
                      <h3 className={styles.issueTitle}>{issue.title}</h3>
                      <p className={styles.issueDescription}>
                        {issue.description}
                      </p>
                      <p className={styles.issueTags}>
                        {issue.keywords.split(', ').map((tag) => (
                          <Tag key={tag} tag={tag} />
                        ))}
                      </p>
                    </a>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Category;

import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';
import Tag from '../../components/Tag/Tag';

import styles from './Categories.module.scss';

import { GetServerSideProps } from 'next';

import { IssueShort, IssuesArray } from '../../types/Issues';

import { useIssueShort } from '../../hooks/useIssueShort';
import { useCategoryTitle } from '../../hooks/useCategoryTitle';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug: string | string[] = context.query.slug;

  const issuesData = await useIssueShort(pageSlug);
  const categoriesData = await useCategoryTitle(pageSlug);
  const issues: IssuesArray = issuesData.solutions;
  const categoryTitle = categoriesData.category.title;

  return {
    props: { issues, categoryTitle },
  };
};

const Category = ({
  issues,
  categoryTitle,
}: {
  issues: IssueShort[];
  categoryTitle: string;
}) => {
  return (
    <>
      <Navbar />
      <main>
        <Heading title={`What can improve ${categoryTitle.toUpperCase()}`} />
        {issues.length === 0 ? (
          <div>No issues</div>
        ) : (
          <>
            <div className={styles.issues}>
              {issues.map((issue) => {
                return (
                  <Link
                    key={issue.slug}
                    href={`/issue/${issue.categorySlug}/${issue.slug}`}
                  >
                    <a className={styles.issue} key={issue.slug}>
                      <h3 className={styles.issueTitle}>{issue.title}</h3>
                      <p className={styles.issueDescription}>
                        {issue.description}
                      </p>
                      <p className={styles.issueTags}>
                        {issue.keywords.split(', ').map((tag) => (
                          <Tag key={tag} tag={tag} />
                        ))}
                      </p>
                      <p className={styles.issueDescription}>
                        Updated: {issue.date}
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

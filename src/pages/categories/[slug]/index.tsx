import Link from 'next/link';
import { GetServerSideProps } from 'next';

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Heading from '../../../components/Heading/Heading';

import styles from '../Categories.module.scss';

import { IssueShort, IssuesArray } from '../../../types/Issues';

import { useIssueShort } from '../../../hooks/useIssueShort';
import { useCategoryTitle } from '../../../hooks/useCategoryTitle';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageSlug: string | string[] = context.query.slug;

  const issuesData = await useIssueShort(pageSlug);
  const categoriesData = await useCategoryTitle(pageSlug);
  const issues: IssuesArray = issuesData.improvements;
  const category = categoriesData.category;

  return {
    props: { issues, category },
  };
};

const Category = ({
  issues,
  category,
}: {
  issues: IssueShort[];
  category: {
    title: string;
    description: string;
  };
}) => {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.breadCrumbs}>
          <Link href={'/'}>Home</Link>
        </div>
        <Heading title={`${category.title}`} />
        <p>{category.description}</p>
        {issues.length === 0 ? (
          <div>No topics</div>
        ) : (
          <>
            <div className={styles.issues}>
              {issues.map((issue) => {
                return (
                  <Link
                    key={issue.slug}
                    href={`/topics/${issue.categorySlug}/${issue.slug}`}
                  >
                    <a className={styles.issue} key={issue.slug}>
                      <h3 className={styles.issueTitle}>{issue.title}</h3>
                      <p>{issue.description}</p>
                      <p className={styles.issueDescription}>{issue.date}</p>
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

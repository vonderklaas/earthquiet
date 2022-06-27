import { GetStaticProps } from 'next';

import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';

import Image from 'next/image';

import styles from './Categories.module.scss';

import { Categories, Category } from '../../types/Categories';
import { IssueId } from '../../types/Issues';

import { useCategories } from '../../hooks/useCategories';
import { useIssuesIds } from '../../hooks/useIssuesIds';

export const getStaticProps: GetStaticProps = async () => {
  const categoriesData = await useCategories();
  const categories = categoriesData.categories;

  const issuesData = await useIssuesIds();
  const issuesIds = issuesData.solutions;

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
          paragraph={`Explore the categories and areas of human life, as well as what can be done 
          to improve their condition and further development`}
        />
        <div className={styles.categories}>
          {categories.map((category: Category) => {
            return (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <a className={styles.category} key={category.slug}>
                  <div>
                    <div className={styles.categoryTitleWrapper}>
                      <h3 className={styles.categoryTitle}>{category.title}</h3>
                      <Image
                        src={category.icon.url}
                        alt={category.slug}
                        width='35'
                        height='35'
                      />
                    </div>
                    {/* <p className={styles.categoryDescription}>
                      {category.description}
                    </p> */}
                  </div>
                  <p className={styles.categoryIssues}>
                    {category.issues === 1 ? (
                      <span>{category.issues} topic</span>
                    ) : (
                      <span>{category.issues} topics</span>
                    )}
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

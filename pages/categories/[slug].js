import { gql, GraphQLClient } from 'graphql-request';
import Reactmarkdown from 'react-markdown';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;

  const url = process.env.API_CONTENT_URL;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_TOKEN,
    },
  });

  const query = gql`
    query ($pageSlug: String!) {
      problems(where: { categorySlug: $pageSlug }) {
        title
        description
        slug
        categorySlug
      }
    }
  `;

  // @ts-ignore
  const vars = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, vars);
  const problems = data.problems;

  return {
    props: { problems },
  };
};

const Category = ({ problems }) => {
  if (problems.length === 0) {
    return <h1>No problems</h1>;
  }

  return (
    <div>
      {problems.map((problem) => {
        console.log(problem);
        return (
          <div className='problem-card' key={problem.slug}>
            <Link href={`/problem/${problem.categorySlug}/${problem.slug}`}>
              <a>
                <h2>{problem.title}</h2>
                <p>{problem.description}</p>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

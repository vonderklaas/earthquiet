import { gql, GraphQLClient } from 'graphql-request';
import Reactmarkdown from 'react-markdown';

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
      problems(where: { slug: $pageSlug }) {
        title
        description
        slug
        body
        aftermath
        solutions
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
  return (
    <div>
      <h2>Problem</h2>
      {problems.map((problem) => {
        console.log(problem);
        return (
          <div className='problem-card' key={problem.slug}>
            <h2>{problem.title}</h2>
            <Reactmarkdown children={problem.body} />
            <Reactmarkdown children={problem.aftermath} />
            <Reactmarkdown children={problem.solutions} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;

// Importing GraphQL
import Link from 'next/link';
import { gql, GraphQLClient } from 'graphql-request';

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
        image {
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
  console.log(categories);
  <h1>Categories</h1>;
  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category.slug}>
            <h2>{category.title}</h2>
            <img src={category.image.url} alt={category.title} />
            <p>{category.description}</p>
            <Link href={`/categories/${category.slug}`}>
              <a>
                <h3>View Issues</h3>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

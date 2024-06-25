import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { GraphQLClient, gql } from "graphql-request";

export const meta = () => {
  return [
    { title: "Hygraph Implementation Demo" },
    { name: "description", content: "Welcome to Hygraph, a headless CMS" },
  ];
};

const getPageBySlug = gql`
  query Page($slug: String!) {
    page(where: { slug: $slug }) {
      title
      slug
      body {
        text
      }
    }
  }
`;
export let loader = async ({ params }) => {
  const { slug } = params;

  const hygraph = new GraphQLClient(
    process.env.VITE_HYGRAPH_URL,
  );

  const { page } = await hygraph.request(getPageBySlug, {
    slug
  });

  return json({ page });
};

export default function Page() {
  let data = useLoaderData();

  return (
    <div className="m-12">
      <h1 className="mb-4 text-5xl font-bold">{data.page.title}</h1>
      <p className="mb-8 text-lg">{data.page.body.text}</p>
      <p>
        <Link to="/" className="underline">
          Back to homepage
        </Link>
      </p>
    </div>
  );
}

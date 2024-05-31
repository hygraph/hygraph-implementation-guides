import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { GraphQLClient, gql } from "graphql-request";

export const meta = () => {
  return [
    { title: "Hygraph Implementation Demo" },
    { name: "description", content: "Welcome to Hygraph, a headless CMS" },
  ];
};

interface Page {
  title: string;
  slug: string;
  body: {
    text: string;
  };
}

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
export let loader = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const hygraph = new GraphQLClient(
    "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cltg6frtj07ga08upevb6yqqm/master"
  );

  const { page } = await hygraph.request(getPageBySlug, {
    slug
  }) as { page: Page }; // Type assertion

  return json({ page });
};

export default function Page() {
  let data = useLoaderData() as { page: Page };

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

import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { GraphQLClient, gql } from "graphql-request";

export const meta = () => {
  return [
    { title: "Hygraph Implementation Demo" },
    { name: "description", content: "Welcome to Hygraph, a headless CMS" },
  ];
};


const getPagesQuery = gql`
  {
    pages {
      slug
      title
    }
  }
`;

export let loader = async () => {
  const hygraph = new GraphQLClient(
    "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cltg6frtj07ga08upevb6yqqm/master"
  );

  const { pages } = await hygraph.request(getPagesQuery);
  //console.log(pages)
  return json({ pages });
 
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div className="m-12">
      <h1 className="mb-4 text-5xl font-bold">
        Hygraph Implementation Guides demo
      </h1>
      <p className="mb-4 text-lg">Click the links below to see other pages</p>
      <ul className="mb-8 list-disc list-inside">
      {data.pages.map(({ slug, title }) => (
        <li key={slug}>
          <Link to={`/page/${slug}`} prefetch="intent" className="underline">
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <p>
        <button
          className="px-4 py-2 my-6 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700">
          <Link 
            to ="https://hygraph.com/docs/implementations"
            target="_blank">Implementation Docs</Link>
        </button>
      </p>
    </div>
  );
}
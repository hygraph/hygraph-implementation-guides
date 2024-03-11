import Link from "next/link";

async function getPages() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Pages {
        pages {
          title
          slug
          body {
            text
          }
        }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.pages;
}

export default async function Home() {
  const pages = await getPages();
  return (
    <div className="m-12">
      <h1 className="text-5xl font-bold mb-4">
        Hygraph Implementation Guides demo
      </h1>
      <p className="text-lg mb-4">Click the links below to see other pages</p>
      <ul className="mb-8 list-disc list-inside">
        {pages.map((page: any) => {
          return (
            <li key={page.slug}>
              <Link href={`/page/${page.slug}`} className="underline">
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <p>
        <a
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-6 rounded"
          href="https://hygraph.com/docs/implementations"
          target="_blank"
        >
          Implementation Docs
        </a>
      </p>
    </div>
  );
}

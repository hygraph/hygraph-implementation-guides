import Link from "next/link";

async function getPage(slug) {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Page($slug:String!) {
        page(where: {slug: $slug}) {
          title
          slug
          body {
            text
          }
        }
      }`,
      variables: {
        slug,
      },
    }),
  });
  const json = await response.json();
  return json.data.page;
}

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  return (
    <div className="m-12">
      <h1 className="text-5xl font-bold mb-4">{page.title}</h1>
      <p className="text-lg mb-8">{page.body.text}</p>

      <p>
        <Link href="/" className="underline">
          Back to homepage
        </Link>
      </p>
    </div>
  );
}

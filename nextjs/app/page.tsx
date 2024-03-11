async function getPage(slug: string) {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Page($slug:String!) {
        page(where: {slug: $slug}) {
          title
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

export default async function Home() {
  const page = await getPage("hygraph-works-with-any-framework");
  return (
    <div className="px-5 mt-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold">{page.title}</h1>
        <p className="text-lg">{page.body.text}</p>
        <a
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-6 rounded"
          href="https://hygraph.com/docs/implementations"
          target="_blank"
        >
          Implementation Docs
        </a>
      </div>
    </div>
  );
}

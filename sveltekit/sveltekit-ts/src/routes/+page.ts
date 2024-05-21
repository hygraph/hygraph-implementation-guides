import { GraphQLClient } from 'graphql-request';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const hygraph = new GraphQLClient(
        import.meta.env.VITE_HYGRAPH_URL,
		{
			headers: {}
		}
	);

    interface Page {
        slug: string;
        title: string;
      }
    
    interface PagesResponse {
        pages: Page[];
      }

	const { pages } = await hygraph.request<PagesResponse>(
		`{
            pages {
                slug
                title
            }
        }`
	);

	return {
		pages
	};
};

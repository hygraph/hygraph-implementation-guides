import { GraphQLClient } from 'graphql-request';

/** @type {import('./$types').PageLoad} */
export const load = async ({params}) => {
	const hygraph = new GraphQLClient( import.meta.env.VITE_HYGRAPH_URL,
		{
			headers: {}
		}
	);

    interface Page {
        slug: string;
        title: string;
        body: {
            text: string;
        };
      }
    
    interface PageResponse {
        page: Page;
      }

	const { page } = await hygraph.request<PageResponse>(
		`query Page($slug: String!) {
            page(where: { slug: $slug }) {
	            title
                slug
                body    {
                text
                    }
	            }
	        }`,
		{
			slug: params.slug
		}
	);

	return {
		page
	};
};
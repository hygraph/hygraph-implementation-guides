import { GraphQLClient } from 'graphql-request';

/** @type {import('./$types').PageLoad} */
export const load = async ({params}) => {
	const hygraph = new GraphQLClient( import.meta.env.VITE_HYGRAPH_URL,
		{
			headers: {}
		}
	);

	const { page } = await hygraph.request(
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
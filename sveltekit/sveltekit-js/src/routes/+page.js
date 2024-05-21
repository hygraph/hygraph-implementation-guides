import { GraphQLClient } from 'graphql-request';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const hygraph = new GraphQLClient(
        import.meta.env.VITE_HYGRAPH_URL,
		{
			headers: {}
		}
	);

	const { pages } = await hygraph.request(
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

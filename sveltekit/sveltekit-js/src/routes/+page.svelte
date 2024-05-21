<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const pages = data.pages;
</script>

<main>
	<div class="m-12">
		<h1 class="mb-4 text-5xl font-bold">Hygraph Implementation Guides demo</h1>
		<p class="mb-4 text-lg">Click the links below to see other pages</p>
		<ul class="mb-8 list-disc list-inside">
			{#each pages as page (page.slug)}
				<li>
					<a href={`/page/${page.slug}`} class="underline">{page.title}</a>
				</li>
			{/each}
		</ul>
		<p>
			<a
			  class="px-4 py-2 my-6 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700"
			  href="https://hygraph.com/docs/implementations"
			  target="_blank"
			>
			  Implementation Docs
			</a>
		  </p>
	</div>
</main>

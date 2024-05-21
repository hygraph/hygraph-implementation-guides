<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	const page = data.page;
</script>

<main>
	<div class="m-12">
		<h1 class="mb-4 text-5xl font-bold">{page.title}</h1>
		<p class="mb-8 text-lg">{page.body.text}</p>

		<p>
			<a href="/" class="underline">Back to homepage</a>
		</p>
	</div>
</main>

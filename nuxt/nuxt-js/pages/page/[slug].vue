
<script setup lang="js">
const route = useRoute();
const { data } = await useFetch(
  "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cltg6frtj07ga08upevb6yqqm/master",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Page($slug: String!) {
                page(where: { slug: $slug }) {
                    title
                    body {
                    text
                    }
                }
            }`,
        variables: {
            slug: route.params.slug,
        },
    }),
  }
);

const page = await data.value.data.page;
</script>

<template>
  <div class="m-12">
    <h1 class="text-5xl font-bold mb-4">{{ page.title }}</h1>
    <p class="text-lg mb-8">{{ page.body.text }}</p>

    <p>
      <nuxt-link to="/" class="underline">Back to homepage</nuxt-link>
    </p>
  </div>
</template>

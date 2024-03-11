<script setup lang="ts">
// GqlPage() was created by the nuxt-graphql-client module and has types
// attached to it.
const { page } = await GqlPage({ slug: "hygraph-works-with-any-framework" });
</script>

<template>
  <div class="px-5 mt-10">
    <div class="flex flex-col items-center gap-4">
      <h1 class="text-5xl font-bold">{{ page.title }}</h1>
      <p class="text-lg">{{ page.body.text }}</p>
      <a
        class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-6 rounded"
        href="https://hygraph.com/docs/implementations"
        target="_blank"
      >
        Implementation Docs
      </a>
    </div>
  </div>
</template>

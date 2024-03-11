<script setup lang="ts">
const { pages } = await GqlPages();
</script>

<template>
  <div class="m-12">
    <h1 class="text-5xl font-bold mb-4">Hygraph Implementation Guides demo</h1>
    <p class="text-lg mb-4">Click the links below to see other pages</p>
    <ul class="mb-8 list-disc list-inside">
      <li v-for="page in pages" :key="pages.slug">
        <nuxt-link :to="`/page/${page.slug}`" class="underline">{{
          page.title
        }}</nuxt-link>
      </li>
    </ul>

    <p>
      <a
        class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-6 rounded"
        href="https://hygraph.com/docs/implementations"
        target="_blank"
      >
        Implementation Docs
      </a>
    </p>
  </div>
</template>

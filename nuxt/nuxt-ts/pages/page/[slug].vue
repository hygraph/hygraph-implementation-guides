<script setup lang="ts">
const route = useRoute();
const { page } = await GqlPage({ slug: route.params.slug });
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

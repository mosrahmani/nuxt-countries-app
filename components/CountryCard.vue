<template>
  <NuxtLink :to="{ name: 'slug', params: { slug: country.name }}">
    <div class="card rounded-lg shadow-xl bg-white dark:bg-gray-800">
      <div class="aspect-w-4 aspect-h-3">
        <img
          v-lazy-load
          :data-src="country.flag || require('assets/img/brokenImg.svg')"
          :alt="country.name + ' flag'"
          class="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-tl-lg rounded-tr-lg"
        >
      </div>
      <div class="p-5">
        <h2 class="my-4 font-bold text-xl">
          {{ country.name }}
        </h2>
        <div>
          <strong>Population:</strong>
          <span>{{ country.population || '-' }}</span>
        </div>
        <div>
          <strong>Region:</strong>
          <span>{{ country.region }}</span>
        </div>
        <div>
          <strong>Capital:</strong>
          <span>{{ country.capital }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    country: Object
  }
}
</script>
<style lang="scss">
  .card {
    min-height: 25rem;
  }
</style>

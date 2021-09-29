<template>
  <div class="container mx-auto">
    <section class="mb-10">
      <BackButton />
    </section>
    <main class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div class="aspect-w-4 aspect-h-3">
        <img
          :src="country[0].flag || require('assets/img/brokenImg.svg')"
          :alt="country[0].name + ' flag'"
          class="w-full h-full object-center object-cover lg:w-full lg:h-full"
          loading="lazy"
        >
      </div>
      <div class="flex items-center">
        <div>
          <h1 class="text-3xl font-bold">{{ country[0].name }}</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
            <div>
              <p>
                <strong>Native Name:</strong>
                <span class="ml-2">{{ country[0].nativeName || ' -' }}</span>
              </p>
              <p class="mt-3">
                <strong>Population:</strong>
                <span class="ml-2">{{ country[0].population || ' -' }}</span>
              </p>
              <p class="mt-3">
                <strong>Region:</strong>
                <span class="ml-2">{{ country[0].region || ' -' }}</span>
              </p>
              <p class="mt-3">
                <strong>Sub Region:</strong>
                <span class="ml-2">{{ country[0].subregion || ' -' }}</span>
              </p>
              <p class="mt-3">
                <strong>Capital:</strong>
                <span class="ml-2">{{ country[0].capital || ' -' }}</span>
              </p>
            </div>
            <div>
              <p class="mt-3">
                <strong>Top Level Domain:</strong>
                <span class="ml-2">{{ country[0].topLevelDomain[0] || ' -' }}</span>
              </p>
              <p class="mt-3">
                <strong>Currencies:</strong>
                <span class="ml-2">-</span>
              </p>
              <p class="mt-3">
                <strong>Languages:</strong>
                <span class="ml-2">-</span>
              </p>
            </div>
          </div>
          <div class="flex items-center mt-6">
            <h3 class="mr-4 font-bold">Borders:</h3>
            <a href="#" class="shadow-md rounded-md bg-white dark:bg-gray-800 py-1 px-6 mr-3">Iran</a>
            <a href="#" class="shadow-md rounded-md bg-white dark:bg-gray-800 py-1 px-6">Germany</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const country = await $axios.$get(`/api/name/${params.slug}?fullText=true`)
    return { country }
  },
  head () {
    return {
      title: this.country.name
    }
  }
}
</script>

<template>
  <div class="container mx-auto">
    <section class="flex flex-wrap md:justify-between mb-10">
      <div class="search-width flex items-center mx-auto md:mx-0 w-full md:w-auto rounded-lg shadow-xl p-3 bg-white dark:bg-gray-800">
        <div class="pr-4 pl-1">
          <img v-if="isSearching" src="~/assets/img/loading.svg">
          <i v-else class="las la-search text-xl" />
        </div>
        <input v-model="searchQuery" type="text" class="flex-grow" placeholder="Search for a country ...">
      </div>
      <div class="w-full md:w-auto md:ml-auto mt-8 md:mt-0 flex justify-start md:justify-end">
        <button class="mr-4 ml-auto flex items-center order-last md:order-first" @click="sortToggle(nameSortIsAsc, sortByName)">
          <span>Sort By Name</span>
          <i class="las text-sm ml-2" :class=" (nameSortIsAsc) ? 'la-caret-up' : 'la-caret-down' " />
        </button>
        <Dropdown
          :options="['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']"
          label="Filter By Region"
          @do-action="filter"
        />
      </div>
    </section>
    <main class="">
      <p v-if="$fetchState.pending" class="flex flex-col items-center text-center pt-8">
        <img src="~/assets/img/loading.svg" class="loading-size mb-2 mr-2">
        <span>Loading ...</span>
      </p>
      <p v-else-if="$fetchState.error" class="text-center text-red-500 pt-8">
        <i class="las la-exclamation-triangle text-4xl mb-2" /> <br>
        <span>Error while fetching countries</span>
      </p>
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          <div v-for="(country, index) in countries" :key="index">
            <LazyCountryCard :country="country" />
          </div>
        </div>
        <p v-if="!countries" class="text-center text-red-500 pt-8">
          <i class="las la-exclamation-triangle text-4xl mb-2" /> <br>
          <span>Sorry! we couldn't find anything</span>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countries: [],
      searchQuery: '',
      isSearching: false,
      debounce: null,
      nameSortIsAsc: true
    }
  },
  async fetch () {
    this.countries = await this.$axios.$get('/api/all')
      .finally(() => {
        this.isSearching = false
      })
  },
  watch: {
    searchQuery (value) {
      this.isSearching = true
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => this.search(value), 1000)
    }
  },
  mounted () {
    this.$fetch()
  },
  methods: {
    async filter (type, value) {
      this.countries = await this.$axios.$get(`/api/${type}/${value}`)
    },
    async searchByName (name) {
      this.countries = await this.$axios.$get(`/api/name/${name}`)
        .finally(() => {
          this.isSearching = false
        })
    },
    search (name) {
      name
        ? this.searchByName(name)
        : this.$fetch()
    },
    sortByName () {
      this.nameSortIsAsc = !this.nameSortIsAsc
      return this.countries.sort((a, b) => a.name.localeCompare(b.name))
    },
    sortToggle (checkField, callback) {
      return (checkField)
        ? callback().reverse()
        : callback()
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-width {
    min-width: 20rem;
  }
  .loading-size {
    max-width: 2rem;
    max-height: 2rem;
  }
</style>

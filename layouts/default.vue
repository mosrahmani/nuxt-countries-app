<template>
  <div class="mx-auto h-screen dark:bg-gray-900 dark:text-purple-50 flex flex-col">
    <Navbar />
    <Nuxt class="py-10 px-6 md:px-4 flex-grow" />
    <div class="py-6 container text-gray-500 dark:text-gray-400 mx-auto text-center">
      Made with <span class="text-red-700">❤</span> by Mostafa Rahmani
    </div>
  </div>
</template>

<script>
export default {
  head () {
    const theme = this.$cookies.get('theme')
    const themeClass = (theme === 'dark') ? 'dark' : ''
    return {
      htmlAttrs: {
        class: themeClass
      }
    }
  }
}
</script>

<template>
  <button class="py-3 px-5 rounded-lg shadow-xl bg-white dark:bg-gray-800" @click="goBack">
    <i class="las la-arrow-left mr-2" />
    <span>back</span>
  </button>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    goBack () {
      return this.$router.back()
    }
  }
}
</script>

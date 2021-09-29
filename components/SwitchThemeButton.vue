<template>
  <button @click="toggleTheme">
    <i class="las text-lg" :class="(mode === 'dark') ? 'la-sun text-yellow-400' : 'la-moon'" />
    <span class="ml-1">{{ (mode === 'light') ? 'Dark' : 'Light' }} Mode</span>
  </button>
</template>
<script>

export default {
  name: 'SwitchThemeButton',
  data () {
    return {
      mode: this.$cookies.get('theme')
    }
  },
  methods: {
    toggleTheme () {
      const html = document.documentElement.classList
      if (html.contains('dark')) {
        html.remove('dark')
        this.mode = 'light'
      } else {
        html.add('dark')
        this.mode = 'dark'
      }
      // set a cookie for ssr purposes
      this.$cookies.set('theme', this.mode)
    }
  }
}
</script>

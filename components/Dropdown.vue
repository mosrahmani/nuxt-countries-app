<template>
  <div class="flex items-center justify-center">
    <div class="relative w-48">
      <button
        class="flex items-center justify-between p-4 rounded-lg shadow-xl w-full bg-white dark:bg-gray-800"
        @click="isOptionsExpanded = !isOptionsExpanded"
        @blur="isOptionsExpanded = false"
      >
        <span>{{ optionsTitle }}</span>
        <i
          class="las la-angle-up text-sm mr-1 transform transition-transform duration-200 ease-in-out"
          :class="isOptionsExpanded ? 'rotate-0' : 'rotate-180'"
        />
      </button>
      <transition
        enter-active-class="transform transition duration-500"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="isOptionsExpanded"
          class="absolute left-0 right-0 my-4 rounded-lg shadow-xl overflow-hidden bg-white dark:bg-gray-800 z-10"
        >
          <li
            v-for="(option, index) in options"
            :key="index"
            class="px-3 py-2 transition-colors duration-300 hover:text-blue-700 border-0 cursor-pointer"
            @mousedown.prevent="setOption(option)"
            @click="doAction(option)"
          >
            {{ option }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    label: String
  },
  data () {
    return {
      isOptionsExpanded: false,
      optionsTitle: ''
    }
  },
  created () {
    this.optionsTitle = this.label
  },
  methods: {
    setOption (option) {
      this.optionsTitle = option
      this.isOptionsExpanded = false
    },
    doAction (value) {
      this.$emit('do-action', 'region', value)
    }
  }
}
</script>

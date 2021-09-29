export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.params = config.params || {}
    config.params.access_key = 'bd80bc0a55f3cc296986733e8154e33c'
    return config
  })
}

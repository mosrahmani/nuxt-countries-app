export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.params = config.params || {}
    config.params.access_key = process.env.API_ACCESS_KEY
    return config
  })
}

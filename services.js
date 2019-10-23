const BASE_URL = 'https://no-hoax-id-backend.herokuapp.com/'

module.exports = {
  URL_GET_BERITA: (limit) => `${BASE_URL}beritas?limit=${limit}`,
  URL_GET_ONE_BERITA: (slug) => `${BASE_URL}beritas/one/${slug}`,
  URL_GET_SITEMAP: `${BASE_URL}sitemap.xml`
}
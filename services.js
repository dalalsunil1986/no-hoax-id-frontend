const prod = process.env.NODE_ENV === 'production'

const BASE_URL = 'https://no-hoax-id-backend.herokuapp.com/'

module.exports = {
  URL_GET_BERITA: (query, page, limit) => `${BASE_URL}beritas?query=${query}&page=${page}&limit=${limit}`,
  URL_GET_ONE_BERITA: (slug) => `${BASE_URL}beritas/one/${slug}`,
  URL_GET_MOVIE: (query, page, limit) => `${BASE_URL}movies?query=${query}&page=${page}&limit=${limit}`,
  URL_GET_ONE_MOVIE: (slug) => `${BASE_URL}movies/one/${slug}`,
  URL_GET_SITEMAP: `${BASE_URL}sitemap.xml`,
  BASE_FRONT_END_URL: prod ? 'https://no-hoax.com' : 'http://localhost:3000'
}
import services from '../services'

const navigate = (path) => {
  window.location.href = `${services.BASE_FRONT_END_URL+path}`
}

const isObjectEmpty = (obj) => {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

export {
  navigate,
  isObjectEmpty
}
export default {
  get() {
    let user = window.localStorage.getItem('user')

    return user ? JSON.parse(user) : false
  },
  set(user) {
    window.localStorage.setItem('user', JSON.stringify(user))
  },
  remove() {
    window.localStorage.removeItem('user')
  }
}

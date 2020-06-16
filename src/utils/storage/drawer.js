export default {
  get() {
    let drawer = window.localStorage.getItem('drawer')

    return drawer ? JSON.parse(drawer) : false
  },
  set(user) {
    window.localStorage.setItem('drawer', JSON.stringify(user))
  },
  remove() {
    window.localStorage.removeItem('drawer')
  }
}

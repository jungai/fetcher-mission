export const state = () => ({
  isError: false,
  active: false
})

export const mutations = {
  show (state) {
    state.active = true
  },
  close (state) {
    console.log('store ->', state.active)
    state.active = false
  },
  toggle (state) {
    state.active = !state.active
  },
  setType (state, isError = false) {
    state.isError = isError
  },
  currentActive (state) {
    return state.active
  }
}

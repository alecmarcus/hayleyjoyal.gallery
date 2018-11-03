import works from '~/assets/works.json'
import { debounce } from 'lodash'

export const state = () => ({
  activeWorkId: works[Object.keys(works)[0]].id,
  activeWork: null
})

export const mutations = {
  setActiveWork(state, workId) {
    state.activeWorkId = workId
    state.activeWork = works[workId]
  }
}

function setActiveWork(store, workId) {
  store.commit('setActiveWork', workId)
}

function throttled(delay, fn) {
  let lastCall = 0
  console.log('throttling')
  return function(...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

export const actions = {
  setActiveWork,
  throttled,
  setActiveWorkThrottled: throttled(750, setActiveWork)
}

import works from '~/assets/works.json'

export const state = () => ({
  // activeWorkId: works[Object.keys(works)[0]].id,
  activeWork: works.bear,
  activeWorkId: 'bear'
})

// export const getters = {
//   getActiveWorkName: (state, getters) => {
//     return state.activeWork.name
//   },
//   getActiveWorkId: (state, getters) => {
//     return state.activeWork.id
//   }
// }

export const mutations = {
  setActiveWork(state, workId) {
    state.activeWorkId = workId
  }
}

export const actions = {
  setActiveWork(store, workId) {
    store.commit('setActiveWork', workId)
  }
}

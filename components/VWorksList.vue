<template>
  <ul>
    <works-list-item
      v-for="work in works"
      :key="work.id"
      :work-id="work.id"
      :name="work.name"
      :year="work.year"
      @setWork="setActiveWork"
      @setWorkThrottled="setActiveWorkThrottled" />
  </ul>
</template>

<script>
import WorksListItem from '~/components/VWorksListItem.vue'
import works from '~/assets/works.json'
import { mapActions } from 'vuex'

export default {
  components: {
    WorksListItem
  },
  data: () => ({
    works
  }),
  methods: {
    ...mapActions({
      setActiveWork: 'workView/setActiveWork',
      setActiveWorkThrottled: 'workView/setActiveWorkThrottled'
    })
  }
}
</script>

<style scoped>
ul {
  font-size: var(--ms6);
  padding-left: var(--ms-6);
}
</style>

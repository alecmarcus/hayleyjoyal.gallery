<template>
  <main>
    <work-image
      v-for="work in works"
      :key="work.id"
      :img-name="work.id"
      class="work-img" />
    <works-list class="works-list"/>
  </main>
</template>

<script>
import WorksList from '~/components/VWorksList.vue'
import WorkImage from '~/components/VWorkImage.vue'
import { mapState } from 'vuex'
import works from '~/assets/works.json'

export default {
  components: {
    WorksList,
    WorkImage
  },
  data: () => ({
    works
  }),
  computed: mapState({ activeWork: state => state.workView.activeWork })
}
</script>

<style scoped>
main {
  position: relative;
}

.work-img {
  position: fixed;
  right: 0;
  top: 0;
  width: calc((100vw / 12) * 9);
  height: 100vh;
}

.works-list {
  position: relative;
  width: calc((100vw / 12) * 5);
}
</style>

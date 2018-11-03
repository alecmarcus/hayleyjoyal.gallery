<template>
  <main>
    <section
      :class="{focused: this.$route.params.id}"
      class="work-view">
      <work-image
        v-for="work in works"
        :key="work.id"
        :img-name="work.id"
        class="work-img" />
      <nuxt-child
        :key="$route.params.id" />
    </section>
    <works-list
      :class="{hidden: this.$route.params.id}"
      class="works-list"/>
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

.works-list {
  position: relative;
  width: calc((100vw / 12) * 5);
  transition: transform 0.5s ease;
}

.works-list.hidden {
  transform: translateX(calc((100vw / 12) * -5));
  pointer-events: none;
}

.work-img {
  position: fixed;
  right: 0;
  top: 0;
  width: calc((100vw / 12) * 9);
  height: 100vh;
  transition: width 0.5s ease 0.125s, opacity 0.3s ease;
}

.work-view.focused .work-img {
  width: 100vw;
}
</style>

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
      ref="worksList"
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
  computed: mapState({ activeWork: state => state.workView.activeWork }),
  mounted() {
    document.onmousemove = this.scrollWorksList
  },
  methods: {
    scrollWorksList: function(event) {
      let listHeight = this.$refs.worksList.$el.getBoundingClientRect().height
      let overhang = listHeight - window.innerHeight
      let deadZone = 0.3 // Percentage of the page, starting from the top, where mouse position doesn't affect list position.
      let acceleration = 1.4 // Accelerates scrolling so that the list can be scrolled completely without having to mouse all the way to the bottom of the viewport.
      let mousePosPercent =
        (event.pageY - deadZone * window.innerHeight) / window.innerHeight // Establish a ratio, between page height (minus a dead zone) and list height, that ensures mouse pos can be used to scroll through the entire list on any viewport.
      let offsetY =
        ((overhang * mousePosPercent) / (deadZone - 1)) * acceleration
      if (mousePosPercent > 0 && mousePosPercent < 0.5) {
        this.$refs.worksList.$el.style.top = offsetY + 'px'
      } else if (mousePosPercent > 0.49) {
        this.$refs.worksList.$el.style.top = '-' + overhang + 'px'
      } else {
        this.$refs.worksList.$el.style.top = '0'
      }
    }
  }
}
</script>

<style scoped>
main {
  position: relative;
  max-height: 100vh;
  overflow: hidden;
}

.works-list {
  position: relative;
  width: calc((100vw / 12) * 5);
  transition: transform 0.5s ease;
  top: 0;
}

@media (max-width: 980px) {
  .works-list {
    width: 65vw;
  }
}

@media (max-width: 639px) {
  .works-list {
    width: 100vw;
  }
}

.works-list.hidden {
  /* transform: translateX(calc((100vw / 12) * -5)); */
  transform: translateX(-100%);
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

<template>
  <header>
    <abbr
      :title="activeWork.name + ', ' + activeWork.year"
      :aria-label="activeWork.Name">i</abbr>
    <nuxt-link to="/">Return to Index</nuxt-link>
  </header>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import works from '~/assets/works.json'

export default {
  validate({ params }) {
    return isNaN(+params.id)
  },
  asyncData({ params, store, error }) {
    const work = params.id
    if (!work) {
      return error({
        message: 'Work not found.',
        statusCode: 404
      })
    }
    return work
  },
  head() {
    return {
      title: this.name
    }
  },
  data: () => ({
    works
  }),
  computed: mapState({ activeWork: state => state.workView.activeWork }),
  created() {
    if (this.$store.state.activeWork == null) {
      this.setActiveWork(this.$route.params.id)
    }
  },
  methods: mapActions({ setActiveWork: 'workView/setActiveWork' })
}
</script>

<style scoped>
header {
  user-select: none;
  padding: 1.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  position: fixed;
  width: 100vw;
  top: 0;
  right: 0;
}

header *,
abbr:before {
  background: var(--ink-black);
}

abbr {
  cursor: help;
  padding: 0.5em 1em;
  border: 1px solid var(--off-white);
  border-radius: 2em;
  text-decoration: none;
}

abbr:before {
  content: attr(title);
  display: inline-block;
  position: absolute;
  left: 4.75em;
  top: 2em;
  color: #f4f7f5;
  color: var(--off-white);
  opacity: 0;
  transition: all 0.2s ease;
}

abbr:hover:before {
  opacity: 1;
  top: 1.85em;
}

@media (max-width: 639px) {
  header {
    width: 100vw;
    padding: 1em;
    justify-content: space-between;
    align-items: flex-end;
    flex-flow: column nowrap;
  }
  a {
    margin-bottom: 1em;
  }
  abbr:before {
    right: 4.25em;
    top: 4.5em;
  }
  abbr:hover:before {
    top: 3.85em;
  }
}
</style>

    <!-- <h1>
      {{ activeWork.name }}
    </h1> -->
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
</style>

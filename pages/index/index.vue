<template>
  <span>No project selected.</span>
</template>


<script>
import works from '~/assets/works.json'

export default {
  data: () => ({
    works
  })
}
</script>

<style scoped>
span {
  display: none;
}
</style>

<template>
  <li
    @mouseover="$emit('setWork', workId)"
    @click="$emit('setWorkThrottled', workId)">
    <nuxt-link :to="'/'+workId">{{ name }} &mdash; <span>{{ year }}</span></nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    workId: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: String, required: true }
  }
}
</script>

<style scoped>
span {
  font-family: 'Bagnard Sans';
}

a {
  margin: var(--ms-8) 0;
  padding-right: var(--ms-8);
  display: inline-block;
  text-decoration: none;
  cursor: image-set(
      url(../assets/img/right-arrow1x.png) 1x,
      url(../assets/img/right-arrow2x.png) 2x
    ),
    pointer;
}

a:hover {
  text-decoration: underline;
}
</style>

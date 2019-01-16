<template>
  <li
    @mouseover="$emit('setWork', workId)"
    @click="$emit('setWorkThrottled', workId)">
    <nuxt-link :to="'/'+workId">{{ name }} <span>{{ year }}</span></nuxt-link>
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
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

a {
  user-select: none;
  margin: var(--ms-8) 0;
  padding-right: var(--ms-8);
  display: inline-block;
  text-decoration: underline;
  text-decoration-color: rgba(244, 247, 245, 0);
  transition: text-decoration-color 0.2s ease;
  cursor: image-set(
      url(../assets/img/right-arrow1x.png) 1x,
      url(../assets/img/right-arrow2x.png) 2x
    ),
    pointer;
}

a:hover {
  text-decoration-color: rgba(244, 247, 245, 1);
}

a:hover span {
  opacity: 1;
}
</style>

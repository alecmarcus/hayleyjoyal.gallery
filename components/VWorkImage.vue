<template>
  <div
    :id="imgName"
    :class="{'visible': (activeWorkId===imgName)}">
    <img
      :src="`/previews/${imgName}.webp`"
      :alt="imgName" >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    imgName: { type: String, required: true }
  },
  computed: mapState({ activeWorkId: state => state.workView.activeWorkId })
}
</script>

<style scoped>
div {
  opacity: 0;
  overflow: hidden;
  text-align: center;
  cursor: image-set(
      url(../assets/img/plus1x.png) 1x,
      url(../assets/img/plus2x.png) 2x
    ),
    pointer;
  transition: opacity 0.3s ease;
}

.visible {
  opacity: 1;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

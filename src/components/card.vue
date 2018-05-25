<template lang='pug'>
  div
    p.card {{ text }}
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang='sass'>
@import '../styles/mixin.sass'
.card
  padding: 10px
  color: blue
</style>

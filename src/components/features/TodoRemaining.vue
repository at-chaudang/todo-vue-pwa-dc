<template>
  <div class="tabbar-item item-left txt-center mt-10 italic">
    <span>You have </span>
    <strong class="color-primary">{{itemLeft}}</strong>
    <span> task(s) left.</span>
  </div>
</template>

<script>
export default {
  name: 'TodoRemaining',
  props: {
    itemLeft: Number
  },
  data() {
    return {}
  }
}
</script>

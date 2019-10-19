<template>
  <footer class="page-footer">
    <div class="tab-list left">
      <button class="btn-tab" :class="{active: filter == 'all'}" @click="filter = 'all'">All</button>
      <button class="btn-tab" :class="{active: filter == 'active'}" @click="filter = 'active'">Active</button>
      <button class="btn-tab" :class="{active: filter == 'completed'}" @click="filter = 'completed'">Completed</button>
    </div>
    <div class="right">
      <transition name="fade">
        <button @click="onClearCompleted" :disabled="showClearCompletedBtn">Clear Completed</button>
      </transition>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      filter: 'all',
      showClearCompletedBtn: false
    }
  },
  methods: {
    onClearCompleted() {
      // TODO:
      this.$emit('onClearCompleted');
    }
  },
  watch: {
    filter: {
      handler(filter) {
        this.$emit('filter', filter)
      },
      deep: true
    }
  }
}
</script>

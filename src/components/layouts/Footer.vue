<template>
  <footer class="page-footer">
    <ul class="tab-list d-flex vertical">
      <li class="tabbar-item btn-tab" :class="{active: filter === 'all'}" @click="filter = 'all'">
        <i class="iconf iconf-list-task d-none"></i>
        All task
      </li>
      <li
        class="tabbar-item btn-tab"
        :class="{active: filter === 'active'}"
        @click="filter = 'active'"
      >
        <i class="iconf iconf-task-active d-none"></i>
        Active
      </li>
      <li
        class="tabbar-item btn-tab"
        :class="{active: filter === 'completed'}"
        @click="filter = 'completed'"
      >
        <i class="iconf iconf-task-done d-none"></i>
        Completed
      </li>
      <li class="tabbar-item pointer item-clear" @click="onClearCompleted" :class="{disabled: !showClearCompletedBtn}">
        <i class="iconf iconf-remove-done d-none"></i>
        Clear Completed
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    itemLeft: Number,
    showClearCompletedBtn: Boolean
  },
  data() {
    return {
      filter: 'all'
    }
  },
  methods: {
    onClearCompleted() {
      this.$emit('onClearCompleted')
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

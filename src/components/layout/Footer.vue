<template>
  <footer class="page-footer">
    <ul class="tab-list d-flex">
      <li class="tabbar-item item-left">
        <strong>{{itemLeft}}</strong>
        item(s) left
      </li>
      <li class="tabbar-item btn-tab" :class="{active: filter == 'all'}" @click="filter = 'all'">
        <i class="all-task-icon icon d-none"></i>
        All task
      </li>
      <li
        class="tabbar-item btn-tab"
        :class="{active: filter == 'active'}"
        @click="filter = 'active'"
      >
        <i class="active-task-icon icon d-none"></i>
        Active
      </li>
      <li
        class="tabbar-item btn-tab"
        :class="{active: filter == 'completed'}"
        @click="filter = 'completed'"
      >
        <i class="completed-task-icon icon d-none"></i>
        Completed
      </li>
      <li class="tabbar-item" @click="onClearCompleted">
        <button :disabled="!showClearCompletedBtn">
          <i class="clear-task-icon icon d-none"></i>
          Clear Completed
        </button>
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

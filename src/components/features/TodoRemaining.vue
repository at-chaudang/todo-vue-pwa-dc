<template>
  <div class="remain-block mb-1">
    <ul class="remain-list">
      <li class="remain-list-item">
        <span>{{countAllTask}}</span>
        <p>All task</p>
      </li>
      <li class="remain-list-item">
        <span>{{countActiveItem}}</span>
        <p>Active</p>
      </li>
      <li class="remain-list-item">
        <span>{{countCompletedItem}}</span>
        <p>Completed</p>
      </li>
    </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoRemaining',
  props: {
    countAllTask: Number,
    countActiveItem: Number,
    countCompletedItem: Number
  },
  data() {
    return {}
  }
}
</script>

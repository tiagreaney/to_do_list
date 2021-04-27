<template>
  <div>
    <div v-if="taskList">
      <ul>
        <li v-for="task in taskList.tasks" :key="task.id">
          {{ task.name }}
        </li>
      </ul>
    </div>
    <div v-else-if="showError">
      404
    </div>
  </div>
</template>

<script src="./TaskList.js"></script>

<style lang="scss" src="./TaskList.scss" scoped></style>

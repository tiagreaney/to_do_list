<template>
  <div>
    <div v-if="taskList">
      <h2>{{ taskList.name }}</h2>
      <ToDoForm @addTask="addTask"/>
      <ToDoList
          :tasks="taskList.tasks"
          @remove="remove"
          @update="update"
      />
    </div>
    <div v-else-if="showError">
      404
    </div>
  </div>
</template>
<script src="./TaskList.js"></script>
<style lang="scss" src="./TaskList.scss" scoped></style>

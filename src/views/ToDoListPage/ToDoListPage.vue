<template>
  <div class="toDoList">
    <button name="addList" onclick="add()">+ New List</button>
    <TaskForm @addTask="addTask"/>
    <TaskList :tasks="tasks" @remove="remove"/>
  </div>
</template>
<script src="./ToDoListPage.js"></script>
<style lang="scss" src="./ToDoListPage.scss" scoped></style>

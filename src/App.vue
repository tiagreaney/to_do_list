<template>
  <div id="app">
    <button name="addList" onclick="add()">+ New List</button>
    <TaskForm @addTask="addTask"/>
    <TaskList :tasks="tasks" @remove="remove"/>
  </div>
</template>
<script src="./App.js"></script>
<style lang="scss" src="./App.scss" scoped></style>

<template>
  <div class="toDoList">
    <p v-for="index in count" :key="index">
      {% raw %}{{ index }}{% endraw %}
    </p>
    <button name="addList" onclick="addComponent()">+ New List</button>
    <TaskForm @addTask="addTask"/>
    <TaskList :tasks="tasks" @remove="remove"/>
    <TaskList>
      <TodoList :data="tasklist.tasks" ></TodoList>
    </TaskList>
  </div>
</template>
<script src="./ToDoListPage.js"></script>
<style lang="scss" src="./ToDoListPage.scss" scoped></style>

<template>
  <div>
    <div class="heading" v-show="taskLists.edit === false">
      <label @dblclick="taskLists.edit = true">{{ taskLists.name }}</label>
    </div>
    <input name="editInput" v-show="taskLists.edit === true" v-model="taskLists.name"
           @blur="taskLists.edit = false; $emit('update')"
           @keyup.enter="taskLists.edit = false; $emit('update')">
    <form @submit.prevent = "addTask">
      <input type="text" placeholder="Enter Task.." v-model="name">
      <button type="submit">+ Add Task</button>
    </form>
  </div>
</template>
<script src="./ToDoForm.js"></script>
<style lang="scss" src="./ToDoForm.scss" scoped></style>

<template>
  <div>
  <div class="heading" v-show="listName.edit === false">
    <label @dblclick="listName.edit = true">{{listName.name}}</label>
  </div>
  <input name="editInput" v-show="listName.edit === true" v-model="listName.name"
         v-on:blur="listName.edit=false; $emit('update')"
         @keyup.enter="listName.edit=false; $emit('update')">
  <form @submit.prevent="addTask">
    <input type="text" placeholder="Enter Task.." v-model="task">
    <button type="submit">+ Add Task</button>
  </form>
  </div>
</template>
<script src="./TaskForm.js"></script>
<style lang="scss" src="./TaskForm.scss" scoped></style>

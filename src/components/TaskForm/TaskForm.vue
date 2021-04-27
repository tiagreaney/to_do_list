<template>
  <div>
    <div class="heading" v-show="tasklists.edit === false">
      <label @dblclick="tasklists.edit = true">{{tasklists.name}}</label>
    </div>
    <input name="editInput" v-show="tasklists.edit === true" v-model="tasklists.name"
           v-on:blur="tasklists.edit=false; $emit('update')"
           @keyup.enter="tasklists.edit=false; $emit('update')">
    <form @submit.prevent="addTask">
      <input type="text" placeholder="Enter Task.." v-model="task">
      <button type="submit">+ Add Task</button>
    </form>
  </div>
</template>
<script src="./TaskForm.js"></script>
<style lang="scss" src="./TaskForm.scss" scoped></style>

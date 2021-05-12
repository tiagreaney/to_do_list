<template>
  <li>
    <div class="container" v-show="!edit">
      <label @dblclick="edit = true"> {{ task.name }}
        <input type="checkbox" v-model="task.index" :key="task.index">
        <span class="checkmark"></span>
      </label>
    </div>
    <input class="editInput" v-show="edit" v-model="task.name"
           @blur="edit = false; $emit('update')"
           @keyup.enter="edit = false; $emit('update')">
    <button @click="remove">x</button>
  </li>
</template>
<script src="./ToDoListItem.js"></script>
<style lang="scss" src="./ToDoListItem.scss" scoped></style>

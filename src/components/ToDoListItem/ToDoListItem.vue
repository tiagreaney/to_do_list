<template>
  <li>
    <div class="container" v-show="!data.edit">
      <label @dblclick="data.edit = true"> {{ data.task }}
        <input type="checkbox" v-model="data.index" :key="data.index">
        <span class="checkmark"></span>
      </label>
    </div>
    <input name="editInput" v-show="data.edit" v-model="data.task"
           v-on:blur="data.edit=false; $emit('update')"
           @keyup.enter="data.edit=false; $emit('update')">
    <button @click="remove">x</button>
  </li>
</template>
<script src="ToDoListItem.js"></script>
<style lang="scss" src="ToDoList.scss" scoped></style>

<template>
  <li>
    <div class="container" v-show="data.edit === false">
      <label @dblclick="data.edit = true"> {{ data.task }}
        <input type="checkbox" v-model="data.index" :key="data.index">
        <span class="checkmark"></span>
      </label>
    </div>
    <input name="editInput" v-show="data.edit === true" v-model="data.task"
           v-on:blur="data.edit=false; $emit('update')"
           @keyup.enter="data.edit=false; $emit('update')">
    <button @click="remove">x</button>
  </li>
</template>
<script src="./TaskListItem.js"></script>
<style lang="scss" src="./TaskListItem.scss" scoped></style>

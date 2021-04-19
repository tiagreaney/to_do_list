<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/toDoList">To Do List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss" scoped></style>

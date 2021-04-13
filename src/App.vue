<template>
  <div id="app">
    <button name="addList" onclick="add()">+</button>
    <TaskList/>
  </div>
</template>

<script>
import TaskList from './components/TaskList/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList
  },
  methods: {
    add() {
      this.components.push(TaskList)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body{
  background-color: #F8F8F8;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;

}
body, html{
  margin: 0;
  height: 100%;
}
#app{
  width: 70%;
}
button[name=addList] {
  border:none;
  color: #DB7093;
  background-color: #ffe4e1;
  border-radius: 5px;
  float: left;

}
</style>

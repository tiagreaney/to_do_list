<template>
  <div id="app">
    <TaskList/>
  </div>
</template>

<script>
import TaskList from './components/TaskList/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList
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
</style>

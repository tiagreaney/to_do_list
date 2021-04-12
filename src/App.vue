<template>
  <div id="app">
    <Tasks/>
  </div>
</template>

<script>
import Tasks from './components/Tasks/Tasks.vue'

export default {
  name: 'App',
  components: {
    Tasks
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

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/to_do_list">To Do List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script src="./App.js"></script>
<style scoped>
body{
  background-color: #F8F8F8;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
}
body, html{
  margin: auto;
  height: 100%;
}
#app{
  width: 70%;
  margin: auto;
}
a{
  float: left;
  color: #ffb6c1;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
a:hover{
  background-color: #DB7093;
  color: white;
  border-radius: 5px;
}
</style>

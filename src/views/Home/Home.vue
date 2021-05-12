<template>
  <div class="home">
    <h1>To Do Lists</h1>
    <nav>
      <ul>
        <li v-for="taskList in taskLists" :key="taskList.id">
          <router-link :to="'/taskLists/'+taskList.id">
            {{ taskList.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss" scoped></style>


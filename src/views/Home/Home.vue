<template>
  <div class="home">
    <h2>To Do Lists</h2>
    <form @submit.prevent="addTaskList">
      <input type="text" placeholder="Enter List Name.." v-model="name">
      <button type="submit">+ Add List</button>
    </form>
    <nav>
      <ul>
        <li v-for="taskList in taskLists" :key="taskList.id">
          <router-link class="taskListList" :to="'/taskLists/'+taskList.id">
            {{ taskList.name }}
          </router-link>
          <button @click="removeTaskList(taskList.id)">x</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss" scoped></style>


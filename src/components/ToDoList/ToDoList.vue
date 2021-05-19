<template>
  <div class="holder">
    <ul>
      <ToDoListItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @remove="remove(task)"
          @update="update(task)"
      >
      </ToDoListItem>
    </ul>
  </div>
</template>
<script src="./ToDoList.js"/>
<style lang="scss" src="./ToDoList.scss" scoped></style>

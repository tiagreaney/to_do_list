<template>
  <div class = "holder">
    <ul>
      <draggable v-model = "tasks" group = "people" @start = "drag=true" @end = "drag = false">
        <transition-group name = "list">
          <ToDoListItem
              v-for = "task in tasks"
              :key = "task.id"
              :task = "task"
              @remove = "remove(task)"
          >
          </ToDoListItem>
        </transition-group>
      </draggable>
    </ul>
  </div>
</template>
<script src = "./ToDoList.js"/>
<style lang = "scss" src = "./ToDoList.scss" scoped></style>

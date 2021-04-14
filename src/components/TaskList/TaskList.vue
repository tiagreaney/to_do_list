<template>
  <div class="holder">
    <ul>
      <draggable v-model="tasks" group="people" @start="drag=true" @end="drag=false">
        <transition-group name="list">
          <TaskListItem
              v-for="(data, index) in tasks"
              :key='index'
              :data="data"
              @remove="remove(index)"
          >
          </TaskListItem>
        </transition-group>
      </draggable>
    </ul>
  </div>
</template>
<script src="./TaskList.js"/>
<style lang="scss" src="./TaskList.scss" scoped></style>

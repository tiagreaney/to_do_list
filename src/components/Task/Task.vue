<template>
  <ul>
    <draggable v-model="tasks" group="people" @start="drag=true" @end="drag=false">
      <transition-group name="list">
        <li v-for="(data, index) in tasks" :key='index'>
          <div class="container" v-show="data.edit === false">
            <label @dblclick="data.edit = true"> {{ data.task }}
              <input type="checkbox" v-model="data.index" :key="data.index">
              <span class="checkmark"></span>
            </label>
          </div>
          <input name="editInput" v-show="data.edit === true" v-model="data.task"
                 v-on:blur="data.edit=false; $emit('update')"
                 @keyup.enter="data.edit=false; $emit('update')">
          <button name="delete" @click="remove(index)">x</button>
        </li>
      </transition-group>
    </draggable>
  </ul>
</template>

<script src="./Task.js"/>

<style lang="scss" src="./Task.scss" scoped></style>


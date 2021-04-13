<template>
  <div class="hello">
    <div class="holder">
      <div class="heading" v-show="listName.edit === false">
      <label @dblclick="listName.edit = true"> {{listName.name}}
      </label>
    </div>
      <input name="editInput" v-show="listName.edit === true" v-model="listName.name"
             v-on:blur="listName.edit=false; $emit('update')"
             @keyup.enter="listName.edit=false; $emit('update')">
      <form @submit="checkForm" @submit.prevent="addTask">
        <input type="text" placeholder="Enter Task.." v-model="task">
      </form>
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
    </div>
  </div>
</template>

<script src="./TaskList.js"/>

<style lang="scss" src="./TaskList.scss" scoped></style>

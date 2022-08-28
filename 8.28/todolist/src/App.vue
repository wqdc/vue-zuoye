<template>
  <div>
    <todo-hander :list="list"></todo-hander>
    <todo-main :list="list" @del-todo="delTodo"></todo-main>
    <todo-footer @seave-todo="seaveTodo" :list="list" @clear-todo="clearTodo"></todo-footer>
  </div>
</template>

<script>
import "./styles/base.css"
import "./styles/index.css"

import TodoHander from '@/components/TodoHander.vue'
import TodoMain from '@/components/TodoMain.vue'
import TodoFooter from '@/components/TodoFooter.vue'
export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('todolist')) || [],
      str: ''
    }
  },
  components: {
    TodoMain,
    TodoFooter,
    TodoHander
  },
  methods: {
    delTodo (ind) {
      // console.log(ind)
      this.list = this.list.filter(item => (item !== ind))
    },
    seaveTodo (ind) {
      this.str = ind
    },
    clearTodo () {
      this.list = this.list.filter(item => !item.isDone)
    },
    // seaver () {
    //   window.localStorage.setItem('todolist',JSON.stringify(this.list)) || []
    // }
  },
  computed: {
    newlist () {
      return this.list.filter(item => {
        if (this.str === '已完成') {
          return item.isDone === true
        } else if (this.str === '未完成') {
          return item.isDone !== true
        } else {
          return this.list
        }
      })
    }
  },
  watch: {
    list: {
      deep: true,
      //immediate: true,
      handler() {
        localStorage.setItem('todolist',JSON.stringify(this.list))
      }
    }
  }
}

</script>

<style>
</style>

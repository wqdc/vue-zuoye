<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="checked">
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="val" 
      @keyup.enter="addTodo"
    />
  </header>
</template>

<script>
import {v4 as uuid} from 'uuid'
export default {
  props: ['list'],
  data () {
    return {
      val: ''
    }
  },
  methods: {
    addTodo () {
      if (this.val === '') {
        return alert('请输入完整的任务信息')
      }
      // const id = this.list[this.list.length - 1].id ? 0 : this.list[this.list.length - 1].id + 1
      const obj = {
        id: uuid(),
        name: this.val,
        isDone: false
      }
      this.list.push(obj)
      this.val = ''
    }
  },
  computed: {
    checked: {
      set(val) {
        this.list.forEach(item => item.isDone = val)
      },
      get() {
        return  this.list.every(item => item.isDone)
      }
    }
  }
}
</script>

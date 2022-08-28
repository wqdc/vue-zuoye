<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ count }}</strong></span>
    <ul class="filters">
      <li v-for="item in lis" :key="item.id">
        <a :class="{selected: item.isDone}" href="javascript:;"  @click="btn(item)">{{ item.name }}</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearTodo">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      lis: [
        {
          id: 1,
          name: '全部',
          isDone: false
        },
        {
          id: 2,
          name: '未完成',
          isDone: false
        },
        {
          id: 3,
          name: '已完成',
          isDone: false
        }
      ]
    }
  },
  methods: {
    btn (i) {
      this.$emit('seave-todo', i.name)
      this.lis.forEach(item => {
        if (item === i) {
          item.isDone = true
        } else {
          item.isDone = false
        }
      })
    },
    clearTodo () {
      this.$emit('clear-todo')
    }
  },
  computed: {
    count () {
      return this.list.reduce((acc, item) => item.isDone ? acc : ++acc, 0)
    }
  }
}
</script>

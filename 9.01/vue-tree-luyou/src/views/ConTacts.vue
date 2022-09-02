<template>
  <div>
    <div>
      <li><a href="#" @click="btn('/Contacts/AllContacts')">All contacts</a></li>
      <li><a href="#" @click="btn('/Contacts/Alice')">Alice</a></li>
      <li><a href="#" @click="btn('/Contacts/Bob')">Bob</a></li>
      <!--    -->
    </div>
    <button @click="add">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [],
      num: 0
    }
  },
  methods: {
    btn (ind) {
      this.$router.push(ind)
    },
    add () {
      this.arr = ['/Contacts/AllContacts', '/Contacts/Alice', '/Contacts/Bob']
      this.num = Math.floor(Math.random() * (this.arr.length))
      // console.log(this.num)
      this.$router.push({
        path: this.arr[this.num]
      })
    }
  }
}
</script>

<style></style>

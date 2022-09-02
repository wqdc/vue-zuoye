<template>
<div>
    <div>
    <li><a href="#" @click="btn('BobBlag')">Blag</a></li>
    <li><a href="#" @click="btn('BobFiex')">Fiex</a></li>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  methods: {
    btn (ind) {
      // this.$router.push({
      //   path: ind
      // })
      this.$router.push({
        name: ind
      })
    }
  }
}
</script>

<style></style>

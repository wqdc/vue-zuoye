<template>
  <div>
    <span>{{ list.shopName }}</span>
    <button @click="subs(ind)">-</button>
    <span>{{ list.count }}</span>
    <button @click="ad(ind)">+</button>
  </div>
</template>

<script>
export default {
  props: ["list", "ind"],
  methods:{
    ad(ind){
        this.$emit('add',ind)
    },
    subs(ind){
        this.$emit('sub',ind)
    }
  }
};
</script>

<style>
</style>
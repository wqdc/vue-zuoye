<template>
  <div>
    <div>
      <router-link to="/page">首页</router-link>
      <router-link to="/sort">分类</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/my">我的</router-link>
    </div>
    <hr>
    <h3>显示分类界面</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

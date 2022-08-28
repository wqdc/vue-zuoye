<template>
  <tr>
    <td>
      <input type="number" v-model.number="arr.count" />
      <span>{{ arr.goodsName }}</span>
      <span v-if="val===0">卖完了！</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["arr"],
};
</script>

<style>
</style>
<template>
 <div>
     <div class="my_div">
    <img :src="url" alt="" />
    <p :style="{ backgroundColor: colorStr }" @click="btn(ind)">{{ name }}</p>
  </div>

 </div>
</template>

<script>
export default {
  props: ["url", "name", "ind"],
  data() {
    return {
      colorStr: "",

    };
  },
  methods: {
    btn(ind) {
      this.colorStr = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;

    this.$emit('sum',this.name)
    },
  },
};
</script>

<style scoped>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}

</style>
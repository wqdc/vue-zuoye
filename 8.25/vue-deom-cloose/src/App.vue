<template>
  <div>
    <div
      v-for="(item, index) in arr" :key="index" style="display: inline-block">
      <input type="checkbox" v-model="checked" :value="item" />
      <span>{{ item }}</span>
    </div>
    <p>你选中的元素, 累加的值和为:{{number}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87], 
      checked:[] 
    };
  },
  computed:{
    // number(){
    //  this.checked = this.arr.filter(item => item === true)
    //  return this.checked.reduce((acc,item) => acc +=item,0)
    // }
    number:{
      set(val){
        this.checked = this.arr.filter(item => item === true)
        console.log(this.checked );
      },
      get(){
        return this.checked.reduce((acc,item) => acc += item , 0)
      }
    }
  }
};
</script>

<style>
</style>

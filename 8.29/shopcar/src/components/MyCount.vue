<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="$emit('update:count', count - 1)">-</button>
    <input type="number" class="form-control inp" :value="count" ref="inp">
    <button type="button" class="btn btn-light" @click="$emit('update:count', count + 1)">+</button>
  </div>
</template>

<script>
export default {
    props:{
        count: Number,
        required:true
    },
    methods: {
        getCount (newValue) {
            if(newValue < 1) {
                //数据是单向流  子组件无法影响父组件内部数据的参数，需要把值传入父组件
            this.$emit('update:count', 0)
            }
        }
    },
    watch: {
        count:'getCount'
    }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn, .inp{
    transform: scale(0.9);
  }
}
</style>
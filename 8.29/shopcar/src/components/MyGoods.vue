<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="good.goods_id" v-model="good.goods_state"
        >
        <label class="custom-control-label" :for="good.goods_id">
          <img :src="good.goods_img" alt="">
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ good.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ good.goods_price }}</span>
        <span>
            <!-- .sync v-bind:属性 = '变量' + @update:'变量' = $event -->
           <!-- <my-count :count.sync=good.goods_count></my-count> -->
           <my-count :count.sync=good.goods_count></my-count>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import MyCount from 'cpns/MyCount.vue'

export default {
    props: {
        good:Object,
        default:() => {
            return {}
        }
    },
    components:{
        MyCount
    }
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin: 0 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top{
        font-size: 14px;
        font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

</style>
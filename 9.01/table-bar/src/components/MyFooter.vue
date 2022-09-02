<template>
  <div class="my-tab-bar">
    <div class="tab-item">
      <span @click="btn('/MyGoodsList')" class="iconfont icon-shangpinliebiao"
        ></span>
        <span>商品列表</span>
    </div>

    <div class="tab-item">
      <span @click="btn('/MyGoodsSearch')" class="iconfont icon-sousuo"
        ></span>
        <span>商品搜索</span>
      </div>
      <div class="tab-item">
      <span @click="btn('/MyUserInfo')" class="iconfont icon-user"
      ></span>
      <span>我的信息</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },

  props: {
    list: {
      type: Array,
      require: true,
      validator (val) {
        if (val.length < 5 && val.length > 2) {
          return true
        }
        throw new Error('数据长度不符合')
      }
    }
  },
  methods: {
    btn (ind, cName) {
      // this.active = ind
      // this.$emit('setName', cName)
      this.$router.push({
        path: ind
        // name: cName
      })
    }
  }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    font-size: 12px;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>

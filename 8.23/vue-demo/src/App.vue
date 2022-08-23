<!-- <template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["帅哥", "美女", "程序猿"],
    };
  },
  methods: {
    btn() {
      // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
     const newarr = this.arr.shift()
      this.arr.push(newarr)
    }
  },
};
</script> -->

<!-- <template>
  <div id="app">
    <ul>
      <li v-for="(item, ind) in arr" :key="ind">
        <span>{{ item }}</span>
        <button @click="del(ind)">删除</button>
      </li>
    </ul>
    <button @click="add">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 3],
    };
  },
  methods: {
    add() {
     const number = Math.floor(Math.random()*10+1)
     this.arr.push(number)
    },
    del(index) {
      // console.log(this.arr[index]);
      this.arr.splice(index,1)
      // .splice(index,1)
    }
  },
};
</script> -->

<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item,ind) in list" :key="ind">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td>
          <button @click="del(ind)">删除</button>
        </td>
      </tr>
      <tr v-if="list.length === 0">
        <td colspan="4" >没有数据咯~</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    };
  },
  methods:{
    del(index) {
      console.log(index);
      this.list.splice(index,1)
    }
  }
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>

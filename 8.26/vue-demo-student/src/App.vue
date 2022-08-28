<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="username" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="userage" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="usersex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="btn">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr v-if="arr.length !== 0">
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "Tom",
          age: "18",
          sex: "男",
        },
        {
          name: "Jone",
          age: "18",
          sex: "女",
        },
      ],
      username: "",
      userage: "",
      usersex: "",
      number: "",
      bool: false,
    };
  },
  methods: {
    btn() {
      if (
        this.username.trim() === "" ||
        this.userage < 0 ||
        this.usersex === ""
      ) {
        alert("请填写信息完整");
        return;
      }
        const obj = {
          name: this.username,
          age:  this.userage,
          sex:  this.usersex,
        };
      if (!this.bool) {
        this.arr.push(obj);
      } else {
        console.log(this.number);
        this.arr.splice(this.number,1, obj)
        this.bool = false
      }
      this.username=''
      this.userage=''
      this.usersex=''
    },
    edit(ind) {
      this.username = this.arr[ind].name;
      this.userage = this.arr[ind].age;
      this.usersex = this.arr[ind].sex;
      this.bool = true;
      this.number = ind;
    },
    del(ind){
      this.arr.splice(ind,1)
    }
  },
};
</script>

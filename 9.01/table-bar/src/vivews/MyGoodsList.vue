<template>
  <div>
    <MyTable :arr="list">
      <template>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #content="scpoe">
        <td>{{ scpoe.row.id }}</td>
        <td>{{ scpoe.row.goods_name }}</td>
        <td>{{ scpoe.row.goods_price }}</td>
        <td>
          <add-tag
            :obj="scpoe.row"
            @addTitle="scpoe.row.tags.push($event)"
          ></add-tag>
          <span
            class="badge bg-warning text-dark"
            v-for="(item, index) in scpoe.row.tags"
            :key="index"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scpoe.row)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import axios from '@/utils/request'
import MyTable from '../components/MyTable.vue'
import AddTag from '@/components/addTag.vue'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    MyTable,
    AddTag
  },
  methods: {
    async getList () {
      const {
        data: { data }
      } = await axios({ url: '/api/goods' })
      this.list = data
    },
    del (ind) {
      this.list = this.list.filter((item) => item !== ind)
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style></style>

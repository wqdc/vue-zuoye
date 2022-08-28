<template>
  <div>
    <dog
      v-for="(item, index) in arr"
      :key="index"
      :url="item.dogImgUrl"
      :name="item.dogName"
      @sum='fn'
    ></dog>
      <div class="my_name">
      <ul v-for="(item, index) in newarry" :key="index">
      <li>{{ item }}</li>
    </ul>
</div>
  </div>
</template>

<script>
import dog from "@/components/Dog.vue";
export default {
  data() {
    return {
      arr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://img2.baidu.com/it/u=1255552682,182814470&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://img0.baidu.com/it/u=3145293648,898152063&fm=253&fmt=auto&app=138&f=JPEG?w=619&h=474",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F23%2F20181023202723_vFVif.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664109847&t=b9d6ff67b5181bceed8ca866cd161a94",
          dogName: "柴犬",
        },
        {
          dogImgUrl:
            "https://img1.baidu.com/it/u=4140092205,78618398&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=379",
          dogName: "阿拉斯加",
        },
      ],
      newarry: [],
    };
  },
  methods:{
    fn(ind){
      // console.log(ind);
      this.newarry.push(ind)
    }
  },
  components: {
    dog,
  },
};
</script>

<style>
.my_name{
  float: right;
}
</style>
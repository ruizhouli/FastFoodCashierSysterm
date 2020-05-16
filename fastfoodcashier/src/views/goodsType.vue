<template>
<div class="goodsType">
    <el-tabs v-model="activeName" @tab-click="handleClick" border>
    <el-tab-pane label="汉堡" name="first">
        <ul class="typegood">
            <li v-for="item in typeGoods" :key="item.goodsId"  @click="pivot(item)"><div class="im"><img :src="item.goodsImg" alt=""></div> <div class="innt"><span v-text="item.goodsName"></span> <span style="color:skyblue">￥{{item.price}}元</span></div></li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="酒水饮料" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="套餐" name="third">角色管理</el-tab-pane>
  </el-tabs>
</div>

</template>
<script>
import {getTypeGoods} from "@/api"
import {mapMutations} from "vuex"
  export default {
    data() {
      return {
        activeName: 'first',
        typeGoods:[]

      };
    },
    methods: {
        ...mapMutations(["addState"]),
      handleClick(tab, event) {
        console.log(tab, event);
      },
      pivot(item){
        //   console.log(ev.target)
          this.addState(item)
      }
    },
    async created () {
        const data = await getTypeGoods();
        // console.log(data)
        this.typeGoods = data.data

        // console.log(this.typeGoods)
    }
  };
</script>
<style scoped>
  .el-tabs__content{
    overflow: auto;
  }
.typegood{
    overflow: auto !important;
    width: 100%;
    height:35vh;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
  
    
}
 .typegood li{
     cursor: pointer;
     margin-left: 2%;
     margin-top:1%;
     height: 20%;
     width: 20%;
     background: #fff;
    display: flex;

    /* flex-direction: column; */


 }

  .typegood li .im{
    width:40%;
    height:100%;
  }
   .typegood li .im img{
       width: 100%;
       height:100%;
   }   

   .typegood li .innt{
       width: 60%;
       height:100%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       font-size: 110%;
   }
   .goodsType{
     width:100%;
     height:100%;
     /* overflow: auto; */
   }

   #pan-first{
     width: 100%;
     height: 100%;
     overflow: auto;
   }
</style>
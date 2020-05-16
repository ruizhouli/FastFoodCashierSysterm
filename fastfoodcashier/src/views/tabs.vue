<template>
<div class="tabsBox">
     <div class="dz">订单展示</div>
     <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="点餐" name="first" ><detail></detail></el-tab-pane>
    <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
    <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
  </el-tabs>
  
    <div :class="{btn:true,dis:bool}">
        <el-button type="success" >结账</el-button>
        <el-button type="primary">挂单</el-button>
       <el-button type="danger" @click="del(activeName)">删除</el-button>
   </div>
</div>
 
</template>
<script>
import detail from "./table.vue"
import {mapState,mapMutations} from "vuex"
  export default {
    data() {
      return {
        activeName: 'first',
        bool:false,
      };
    },
    computed: {
      ...mapState(["tableData"])
    },
    methods: {
      ...mapMutations(["omitState"]),
      handleClick(tab, event) {
        console.log(tab, event);
        console.log(event.target.innerText)
        event.target.innerText==="挂单"?this.bool=true:this.bool=false;
      },
      del(type){
          if(type==='first'){
            console.log(this.tableData)
             if(this.tableData.length){
                  this.omitState()
             }else{
               console.log(123456)
                this.$message.warning("主人,已没有更多订单了!好好上班，别乱点了~")
             }
              
          }else{
            
          }
      }
    },
    components:{
      detail
    }
  };
</script>
<style>
.tabsBox{
  height: 100%;
  width: 100%;
  /* overflow: auto; */
  /* border:1px solid red; */
}
    
 .btn{
    margin-top:30px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .dz{
    width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
    height: 5%;
    border-bottom: 0.3px solid gray;
    font-size: 123%;
  }
  .dis{
    display: none;
  }


</style>
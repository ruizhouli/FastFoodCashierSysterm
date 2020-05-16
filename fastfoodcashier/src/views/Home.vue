<template>
  <div class="home">
    <el-row>
  <el-col :span="1"><div class="grid-content bg-blue over">
      <left />
    </div>
  </el-col> 
  <el-col :span="9"><div class="grid-content tab" >
      <router-view /> 
    </div>
  </el-col>
  <el-col :span="14"><div class="grid-content ">
        <div class="top bg-purple-light ">
            <div style="height:10%;fontSize:123%" class="cj">常见商品</div> 
            <goods />
        </div>
        <div class="bottom bg-purple-light ">
            <goodsType />
        </div>
    </div>
  </el-col>
</el-row>
   <!--  <ul id="nav"></ul>
     
    <div class="tab">
         <tabs></tabs>
    </div> -->
 
 
  </div>
</template>

<script>
import tabs from "./tabs"
import left from "./left"
import goods from "./offengoods"
import goodsType from "./goodsType"
export default {
  name: 'Home',


  components: {
    left,
    goods,
    goodsType
  },
  mounted () {
    document.documentElement.onselectstart = function(ev) {
      var e = ev || window.event;
      e.preventDefault();
    };

  }
 
}
</script>

<style>
  /* #nav{
    height:100vh;
    width:10%;
    background: skyblue;
  }
 */
 .cj{
   display: flex;
   justify-content:flex-start;
   align-items: center;
 }
 .home{
   width:100%;
   height:100%;
 }
    .el-row {
    margin-bottom: 20px;

  }
  .el-row:last-child{
     margin-bottom: 0;
  }
  .el-col {
    border-radius: 0px;
  }
  .tab{
    border-right:1px solid gray
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-blue {
    background:#1D8CE0;
  }
 
  
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 0px;
    height: 100vh;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
 .top, .bottom{
   height: 50%;
   width: 100%;
   box-sizing: border-box;

 }
 .top div{
   border-bottom:1px solid gray ;
   padding-left:20px;
 }
 .top::before{
    content:" ";
    clear: both;
    display: block;
    height: 0;
 }
 .bottom{
   box-sizing: border-box;
   padding-left:2% ;
   padding-top:2% ;
   /* padding: 20px; */
   border-top:0.3px solid gray;
 }

 
</style>

<template>
    <div class="left">
         <ul @click="skip" class="ul">
       <li data-id="0"><i  class=" iconfont icon-shouyin" data-id="0"></i><div data-id="0">收银</div></li>
       <li data-id="1"><i  class=" iconfont icon-dianpu" data-id="1"></i><div data-id="1">店铺</div></li>
       <li data-id="2"><i  class="icon iconfont icon-shangpin" data-id="2"></i><div data-id="2">商品</div></li>
       <li data-id="3"><i  class="icon iconfont icon-huiyuan" data-id="3"></i><div data-id="3">会员</div></li>
       <li data-id="4"><i  class="icon iconfont icon-tongji" data-id="4"></i><div data-id="4">统计</div></li>
     </ul>
    </div>
</template>

<script>
    export default {
        methods: {
              skip(ev){
       console.log(ev.target.dataset.id)
        let href = location.href;
       switch(ev.target.dataset.id){
           case "0":{
               if(!/\/tabs/.test(href)){
                   this.$router.push("/tabs")
               }else{
                   return
               }
           }
              
       }
   }
        }
    }
</script>

<style>
.left{
    width: 100%;
    height:100%;
    overflow: hidden;
}
    .ul{
        height:100%
    }
    .ul li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:10%;
    border-bottom: 1px solid gray;
    font-size: 15px;
   cursor: pointer;
  }
  .iconfont{
      font-size: 24px;
  }
</style>
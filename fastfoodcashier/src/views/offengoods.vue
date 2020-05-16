<template>
    <div>
        <ul class="offen">
            <li v-for="item in offenGoods" :key="item.goodsId" @click="pivot(item)"><span v-text="item.goodsName" ></span><span>￥{{item.price}}</span></li>
        </ul>
    </div>
</template>

<script>
import {goodsName} from "@/api/index.js"
import {mapMutations} from "vuex"
// console.log(goodsName)
    export default {
        data() {
            return {
                offenGoods: []
            }
        },

      async created () {
           let data =  await goodsName();
        //    console.log(data)
           this.offenGoods=data.data
      } ,
        
    methods: {
        ...mapMutations(["addState"]),
        pivot(item){
            this.addState(item)
        }
    }

       
        
    }
</script>

<style scope>
    .offen{
        width: 100%;
        height: 45vh;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        overflow: auto;
    }
    .offen li {
       margin-top:1%;
       margin-left: 2%;
        background: #fff;
        border-radius: 4px;
        width: 20%;
        height: 20%;
        display: flex;
       justify-content: space-evenly;
       align-items: center;
       cursor: pointer;
    }
     .offen li span:nth-child(2){
         color:skyblue
     }
</style>
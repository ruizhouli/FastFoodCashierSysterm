import axios from "./api.js"

export const goodsName = function(){
    return axios.request({
        url:"/offen",
        method:"get"
    })
}

export const getTypeGoods = function(){

    return axios.request({
        url:"/typegoods",
        method:"get"
    })
}
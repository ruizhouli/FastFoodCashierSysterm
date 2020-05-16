const mutations={
    addState(state,payload){
        console.log(payload)
        let bool = false;
        state.tableData.forEach(item=>{
            if(item.goodsName==payload.goodsName){
                
                    item.count++
                    state.total++
                    state.amount+=item.price*1
                    bool = true
            }
        })

        if(!bool){
            state.tableData.push({goodsName:payload.goodsName,count:1,price:payload.price});
            state.total+=1
            state.amount+=payload.price*1
            bool = false;
        }
    },
    
    removeState(state,payload){
        state.tableData.forEach((item,index)=>{
           if(item.goodsName==payload.goodsName) {
            state.tableData.splice(index,1)
            state.total-=payload.count;
            state.amount-=payload.count*payload.price

           }
        })
    },

    omitState(state){
        const len =  state.tableData.length
        state.tableData.splice(0,len)
        state.total=0;
        state.amount=0;
       
    }
}

export default mutations
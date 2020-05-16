export default (store)=>{
    // console.log(localStorage.getItem("State"))
    if(localStorage.getItem("State")) store.replaceState(JSON.parse(localStorage.getItem("State")))
    store.subscribe((commit,state)=>{
        localStorage.setItem("State",JSON.stringify(state))
    })
}
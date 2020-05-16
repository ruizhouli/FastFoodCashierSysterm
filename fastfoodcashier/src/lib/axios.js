import axios from "axios"
import baseURL from "@/config/baseURL.js"
class httpRequest{
    constructor(baseurl=baseURL){
        this.baseurl = baseurl
    }
    reqInnerConfig(){
        const config = {

        };

        return config
    }

    interceptors(instance){
        instance.interceptors.request.use((config)=>{

            return config
        })

        instance.interceptors.response.use((res)=>{
            const {status,data} = res
            return {status,data}
        })
    }
    request(option){
        const instance = axios.create();
        option = Object.assign(this.reqInnerConfig(),option);
        this.interceptors(instance)
        return instance(option)
    }
}

export default httpRequest
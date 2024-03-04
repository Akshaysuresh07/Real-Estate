import axios from "axios";

export const config=
    async(httpMethod,url,reqBody)=>{
        let reqConfig={
            method:httpMethod,
            url,
            data:reqBody,
            headers:{
                'Content-Type':'application/json'
            }
        }
        return await axios(reqConfig).then(
            (res)=>{
                return res
            }
        ).catch(err=>{
            return err
        }
        )
}

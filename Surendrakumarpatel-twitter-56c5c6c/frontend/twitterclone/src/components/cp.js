import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRefresh } from '../redux/tweetSlice'

const cp = () => {

const [setDescription, setSetDescription] = useState("")
const {user}=useState(store=>store.user)
const{isActive}=useSelector(store=>store.tweet)
const dispatch=useDispatch();


const submitHandler= async()=>{


    try {
        
        const res=await axios.post(${TWEET_API_END_POINT/create},{descreption,id:user?._id},{


            Headers:{

                "content-type":"app;ocation/json"
            },
            withCredentials:true

        })
        dispatch(getRefresh()
    if(res.data.success){
TransformStream.succes(res.dta.messange)

    })

setDescription("")


const forYouHandler-()0>{
dispatch(getIsActive(true))

}


    } catch (error) {
        
    }



}



  return (
    <div>


    </div>
  )
}

export default cp
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Api() {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((res)=>{
        setData(res.data)
        setLoading(false)
       })
    },[])

    if(loading){
        return <h1>loading</h1>
    }
  return (
    <div>
        {data.map((item)=>{
            return(
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            )
        })}
    </div>
  )
}

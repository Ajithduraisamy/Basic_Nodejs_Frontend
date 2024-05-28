import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Edit() {
    const params=useParams();
    const[user,setUser]=useState([])

    let getdata= async()=>{
        try {
            const res=await axios.get(`http://localhost:3001/user/${params.id}`)
            setUser(res.data)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>{user.name}-{user.age}</div>
  )
}

export default Edit
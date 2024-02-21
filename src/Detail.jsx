import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const {id}=useParams()
    console.log(id);
    const [data,setdata]=useState('')
useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get( `http://www.omdbapi.com/?i=${id}&apikey=3ac316db`)
        console.log(response);
        setdata(response.data)
    }
    fetchdata()
},[])

   
  return (
    <div>
        <img src={data.Poster} alt="" />
        <p>Title:{data.Title}</p>
        <p>Director:{data.Director}</p>
        <p>Cast:{data.Actors}</p>
        <p>Release Date:{data.Released}</p>
       
    </div>
  )
}


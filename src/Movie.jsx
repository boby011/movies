
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import'./Movie.css';

export const Movie = () => {
  const [title,setTitle]=useState()
  const [data,setData]=useState([''])

  const handleChange=(event)=>{
      setTitle(event.target.value)

  }
  const handleSubmit=async()=>{
      setTitle(title)
      let response=await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=3ac316db`)
      console.log(response.data.Search);
      setData(response.data.Search)

  }

  return (
    <div className='mov'>
        <input type="text" name="" onChange={handleChange} placeholder='enter title' id="search" />
        <button onClick={handleSubmit}>search</button>
        {data?

<div className='content'>
    {data.map((item)=>(
        <>
        <div>
          <Link to={`/Detail/${item.imdbID}`}>
             <img src={item.Poster} alt="" />
             </Link>
        <h2>{item.Title}</h2>
        </div>
        </>
    ))}
</div>
:
<div>Not found</div>
      }
    </div>
  )
}

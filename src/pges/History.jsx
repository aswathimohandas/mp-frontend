import React from 'react'
import { useState,useEffect } from 'react'
import { getHistory } from '../services/allapis'
import { deleteHistory } from '../services/allapis'


function History() {
  const [history,setHistory]=useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result=await getHistory()
    if (result.status==200){
      console.log(result.data);
      setHistory(result.data)
      
    }
    else{
      console.log(result);
      
    }
  }


  const delHistory=async(id)=>{
    const result=await deleteHistory(id)
    console.log(result);
    if(result.status==200){
      getData()
    }
  }

  return (
    <>
    <div className='p-5'>
      <h1>Watch History</h1>
      {
        history.length>0?
        <table className='table table bordered'>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Title</th>
            <th>Video Url</th>
            <th>Date and Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            history.map(item=>(
              <tr>
              <td>{item.videoId}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td>
                <button className='btn' onClick={()=>{delHistory(item.id)}}><i className="fa-solid fa-trash" style={{color: "#d80e18",}} /></button>
              </td>
            </tr>

            ))
           
          }
          
        </tbody>

      </table>
      :<h5>no videos available</h5>
    }
      

    </div>
    </>
  )
}

export default History

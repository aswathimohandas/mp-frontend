import React from 'react'
import {Row ,Col} from 'react-bootstrap'
import Videocard from './Videocard'
import { useEffect,useState } from 'react'
import { getVideos } from '../services/allapis'
import { deleteVideo } from '../services/allapis'

function Video(add) {
  const [videos,setVideos]=useState([])
  const [delResponse,setDelResponse]=useState([])


useEffect(()=>{
  getData()
},[add,delResponse])

const getData=async()=>{
  const res=await getVideos()
  console.log(res);
  if(res.status==200){
    setVideos(res.data)
  }
  else{
    console.log(res);
    
  }
  
}

  return (
   <>
   <div className='border border-2 shadow p-5 m-3'>
   
    {
      videos.length>0?
    <Row>
      {
        videos.map(item=>(
          <Col>
    <Videocard video={item} response={setDelResponse}/>
   </Col>
        ))
      }
   
    </Row>
    :<h2 className='text-center text-danger'>No videos Available!!!!</h2>
}
  </div>
 
   </>
  )
}

export default Video

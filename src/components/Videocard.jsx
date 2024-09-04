import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteVideo,addHistory } from '../services/allapis';

function Videocard({video,response,cat}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() =>{
      setShow(true);
      const dt=new Date()
      const data={videoId:video.videoId,title:video.title,url:video.videoUrl,datetime:dt}
      console.log(data);
      const result=await addHistory(data)
      console.log(result);
      
      
    } 
      


    const handleDelete=async()=>{
      const res=await deleteVideo(video.id)
      console.log(res);
      if(res.status==200){
        toast.success('video deleted')
        response(res)
      }
      else{
        toast.error('deletion failed')
      }
      
    }
    const draghandler=(e)=>{
      console.log(e)
      console.log(video);
      e.dataTransfer.setData("videos",JSON.stringify(video))
      
    }

  return (
    <>
    <Card style={{ width: '15rem' }} onDragStart={(e)=>{draghandler(e)}} draggable>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" src={video?.imageUrl}/>
      <Card.Body>
        <Card.Title>{video?.title}</Card.Title>
        {
          !cat&&
          <Button variant="btn" onClick={handleDelete}><i className="fa-solid fa-trash" style={{color: "#d80e18",}} /></Button>

        }
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="480" height="315" src={video?.videoUrl} allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Videocard

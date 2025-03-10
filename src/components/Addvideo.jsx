import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../services/allapis';
import { toast } from 'react-toastify';

function Addvideo({response}) {
  const [show, setShow] = useState(false);
    const[video,setVideo]=useState({
      videoId:'',title:'',imageUrl:'',videoUrl:''
    })

    const handleUpload=async()=>{
      console.log(video);
      const {videoId,title,imageUrl,videoUrl}=video
      if(!videoId||!title||!imageUrl||!videoUrl){
        // alert(`please enter valid input`)
        toast.error('enter valid input')
      }
      else{
        try{
          const vurl=videoUrl.split('v=')[1]
          const eurl=`https://www.youtube.com/embed/${vurl}?si=X9Y9MLGSsbKRHnZW&autoplay=1`
          video.videoUrl=eurl
          const res=await addVideos(video)
          console.log(res);
          if(res.status==201){
            // alert(`upload sucessful`)
            toast.success('upload successful')
            handleClose()
            response(res)
          }
          else{
            // alert(`upload failed!!!!`)
            toast.error('upload failed')
          }
        }
        catch(err){
          console.log(err);
          // alert(`upload failed!!!`)
          toast.error('upload failed')
          
        }
       
        
        
      }


    }
    
    const handleClose = () => {
      setShow(false);
      setVideo({
        videoId:'',title:'',imageUrl:'',videoUrl:''
      })
    }
    const handleShow = () => setShow(true);

   return (
    <>
    <button className='btn' onClick={handleShow}>
        <i className="fa-solid fa-circle-plus" style={{color: "#FFD43B",}}/>
        </button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingInput" label="Video Id" className="mb-3" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}}>
        <Form.Control type="text" placeholder="1" />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3" onChange={(e)=>{setVideo({...video,title:e.target.value})}}>
        <Form.Control type="text" placeholder="vtitle" />
      </FloatingLabel>
      <FloatingLabel controlId="imgurl" label="Image Url" className="mb-3" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}}>
        <Form.Control type="text" placeholder="url" />
      </FloatingLabel>
      <FloatingLabel controlId="vurl" label="Youtube Video Url" className="mb-3" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}}>
        <Form.Control type="text" placeholder="vurl" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload} >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvideo

import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../services/allapis';
import Categorylist from './Categorylist';
import { deleteCategories } from '../services/allapis';

function Addcategory() {
    const [show, setShow] = useState(false);
    const [addResponse,setAddResponse]=useState("")
    const [category,setCategory]=useState({
      categoryId:"",title:"",videos:[]
    })

    const handleCategory=async()=>{
        console.log(category);
        const {categoryId,title}=category
        if(!categoryId||!title){
          toast.warning("enter valid inputs")
        }
        else{
          const result=await addCategory(category)
          console.log(result)
          if (result.status == 201) {
            toast.success("category Added!!")
            handleClose()
            setCategory({
              categoryId: "", title: "", videos: []
            })
            setAddResponse(result)
          }
          else {
            toast.error("category adding failed")
          }
    
          
        }
        
    }

   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>

    <div className='d-grid'><button className='btn btn-success' onClick={handleShow}>Add Category</button></div>
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingInput" label="Category Id" className="mb-3" onChange={(e)=>{setCategory({...category,categoryId:e.target.value})}}>
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Category Title" onChange={(e)=>{setCategory({...category,title:e.target.value})}}>
        <Form.Control type="text" placeholder="title" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>upload</Button>
        </Modal.Footer>
      </Modal>
      <Categorylist response={addResponse}/>

   </>
  )
}

export default Addcategory

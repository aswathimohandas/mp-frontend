import React,{useEffect,useState} from 'react'
import { getCategories } from '../services/allapis'
import { deleteCategories } from '../services/allapis'
import { updateCategory } from '../services/allapis'
import { toast } from 'react-toastify'
import Videocard from './Videocard'



function Categorylist({response}) {

    const[categoryList,setCategoryList]=useState([])
    useEffect(()=>{
        getData()
    },[response])

    const getData=async()=>{
        const result=await getCategories()
        console.log(result);
        if(result.status==200){
            setCategoryList(result.data)
        }
        
    }
    const deleteCat=async(id)=>{
        const result=await deleteCategories(id)
        console.log(result);
        if(result.status==200){
          getData()
        }
        
        else{
            toast.error("deletion not completed")
        }
      }

      const dropHandler=async(e,category)=>{
        console.log("dropped");
        const vid=JSON.parse(e.dataTransfer.getData("video")); 
        category.videos.push(vid)
        const result=await updateCategory(category.id,category)
        console.log(result);
        if (result.status==200){
          toast.success(`${vid.title} video added to ${category.title}`)
          getData()
        }
        else{
          toast.error("video-category Adding failed!!!")
        }
        

        
        }
      const dragOverHandler=(e)=>{
        console.log("dragging over");
        e.preventDefault()
        
      }



  return (
    <>
      <div className='container-fluid border border-3 border-light p-3 mt-3'>
        {
            categoryList.length>0?
            <div>
                {
                    categoryList.map(item=>(
                      <div className='border'>

                        <div onDrop={(e)=>{dropHandler(e,item)}} onDragOver={(e)=>{dragOverHandler(e)}} className='m-2 p-3 d-flex justify-content-between'>
                            <h3>{item.title}</h3>
                            <button onClick={()=>{deleteCat(item.id)}} className='btn'>
                                <i className='fa-solid fa-trash' style={{color:"#df0c36"}}/>
                            </button>
                        </div>
                        <div className='border'>
                        {
                          item?.videos?.length>0 &&
                          item?.videos?.map(vid=>(
                              <Videocard video={vid} cat={true}/>
                            ))
                          
                          
                        }

                        </div>
                        
                        
                        </div>
                    ))
                }
            </div>
             : <h4>no categories</h4>
        }
    </div>
   

    </>
  )
}

export default Categorylist

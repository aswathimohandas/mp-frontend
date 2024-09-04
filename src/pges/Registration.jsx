import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { checkEmailApi,registerApi } from '../services/allapis'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Registration() {
    const [user,setUser]=useState({
        username:"",email:"",password:""
    })
    const nav=useNavigate()

    const handleRegister=async()=>{
        console.log(user);
        const {username,email,password}=user
        if(!username || !email || !password){
            toast.warning("enter valid inputs!!!")
       }
        else{
            const result=await checkEmailApi(email)
            console.log(result);
            if(result.data.length>0){
                toast.warning("Email Id already in use!!! ")
            }
            else{
               const result=await registerApi(user)
               if(result.status==201){
                toast.success("success")
                setUser({
                    username:"",email:"",password:""
                })
                nav('/log')
               }
               else{
                toast.error("registration failed")
                console.log(result);
                
               }

            }
            
        }
        
    }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
        <div className='w-75 p-5 border shadow bg-light'>
            <h1 className='text-center'>Register</h1>
            <input type="email" onChange={(e)=>{setUser({...user,email:e.target.value})}} className="form-control mb-3" placeholder='Enter e-mail Id' />
            <input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}} className="form-control mb-3" placeholder='Enter User Name' />
            <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} className="form-control mb-3" placeholder='Password' />

            <div className='d-flex justify-content-between'>
                <button onClick={handleRegister} className='btn btn-success'>Register</button>
                <Link to="/log">Already a user?</Link>
            </div>

        </div>
         
    </div>

    </>
  )
}

export default Registration

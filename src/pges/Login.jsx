import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../services/allapis'
import { toast } from 'react-toastify'



function Login() {
    const [user,setUser]=useState({
        email:"",password:""
    })
    const nav=useNavigate()
    const handleLogin=async()=>{
        console.log(user);
        const {email,password}=user
        if(!email || !password){
            toast.warning('enter valid inputs!!')
        }
        else{
            const result=await loginApi(email,password)
            if(result.status==200){
                if(result.data.length>0){
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData',JSON.stringify(result.data[0]))
                    toast.success('login successful!!!')
                    nav('/home')
                    setUser({
                        email:"",password:""
                    })

                }
                else{
                    toast.warning('Invalid email/password')
                }
            }
            else{
                toast.error("something went wrong")
            }
        }
        
    }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
        <div className='w-75 p-5 border shadow bg-light'>
            <h1 className='text-center'>Login</h1>
            <input type="email" onChange={(e)=>{setUser({...user,email:e.target.value})}} className="form-control mb-3" placeholder='Enter e-mail Id' />
            <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} className="form-control mb-3" placeholder='Password' />

            <div className='d-flex justify-content-between'>
                <button onClick={handleLogin} className='btn btn-success'>Login</button>
                <Link to="/reg">New User?</Link>
            </div>

        </div>
         
    </div>
    </>
  )
}

export default Login

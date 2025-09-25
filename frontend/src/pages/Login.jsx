import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../context/authContext';


const Login = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  const {login} = useAuth()
  const navigate =useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", { email, password });
      
      if (res.data.success) {
        login(res.data.user)
        localStorage.setItem("token",res.data.token)

        if(res.data.user.role === "admin"){
        toast.success("Login successful! Welcome back Admin.");
        navigate("/AdminDashboard")
        }
        else{
          navigate("/EmpDashboard")
          toast.success("Login successful! Welcome back Bro.");

        }
      }
       else {
        toast.error("Invalid credentials, please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong, please try again later.");
      console.log(err);
    }
  };

  return (
    
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Welcome Back</h3>
          <form onSubmit={handleSubmit}> 
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address </label>
              <input type="email"  className="form-control"id="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label"> Password  </label>
              <input type="password" className="form-control" id="password"  placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-warning" >  Login </button>
            </div>
          </form>
              <p className="text-center mt-3 text-muted">
                Don't have an account? <Link to="/Register">Register</Link>
              </p>
        </div>
      </div>
    </div>
  );
}

export default Login
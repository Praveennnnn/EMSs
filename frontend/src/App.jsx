import{BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard.jsx"
import Login from "./pages/Login.jsx"
import {ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <BrowserRouter>
      <Routes>
      < Route path="/" element ={<Navigate to= "/login"/>}> </Route>
        <Route path="/login" element ={<Login/>}> </Route>
        <Route path="/AdminDashboard" element ={<AdminDashboard/>}> </Route>

      </Routes>
      <ToastContainer />
      </BrowserRouter>


    
  )
}

export default App

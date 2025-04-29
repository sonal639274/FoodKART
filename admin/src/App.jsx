import react, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import { ToastContainer } from 'react-toastify';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const url = 'https://foodkart-backend-3p2w.onrender.com'
  useEffect(()=>{
    if(location.pathname === "/"){
    navigate("/add")
    }
  })
  return (
    <div>
    <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>

        </Routes>
      </div>
    </div>
  )
}

export default App

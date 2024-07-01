import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import Register from './components/register'
import Login from './components/login'
import AddPost from './components/add-post'
import { useEffect } from 'react'

const App = () => {
  // const navigate = useNavigate();

//   useEffect(()=>{
// navigate('register')
//   })
 
  return (
    <>
    
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/login'  element={<Login />} />
      <Route path='/register'  element={<Register />} />
      <Route path='/add-post'  element={<AddPost />} />
    </Routes>
    </>
    
  )
}

export default App

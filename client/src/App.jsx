import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './components/register'
import Login from './components/login'

const App = () => {
 
  return (
    <>
    

    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/login'  element={<Login />} />
      <Route path='/register'  element={<Register />} />
    </Routes>
    </>
    
  )
}

export default App

import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Nav from './components/Nav'
import axios from 'axios'
import { useEffect, useState } from 'react'

const API_USER_DATA = "http://localhost:3000/api/v1/users"

async function getUserDatat (){
  return await axios.get(API_USER_DATA).then((response)=>response.data)
}

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    let mounted = true
    getUserDatat().then((items)=>{
      if(mounted){
        setUsers(items)
      }
    })
    return ()=> mounted=false
  },[])

  return (
    <>
      <Nav/>
      <Routes>
        <Route 
        path='/'
        element={<Homepage users={users}/>}
        />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUserDatat } from './services/userServices'
import { getPostData } from './services/postServices'
import './App.css'
import Homepage from './pages/Homepage'
import Nav from './components/Nav'


function App() {
  const [users, setUsers] = useState([])
  const [posts, setposts] = useState([])

  useEffect(()=>{
    let mounted = true
    getUserDatat().then((items)=>{
      if(mounted){
        setUsers(items)
      }
    })
    return ()=> mounted=false
  },[])

  useEffect(()=>{
    let mounted = true
    getPostData().then((items)=>{
      if(mounted){
        setposts(items)
      }
    })
  },[])

  return (
    <>
      <Nav/>
      <Routes>
        <Route 
        path='/'
        element={<Homepage users={users} posts={posts}/>}
        />
      </Routes>
    </>
  )
}

export default App

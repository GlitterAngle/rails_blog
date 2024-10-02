import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Nav from './components/Nav'


function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route 
        path='/'
        element={<Homepage/>}
        />
      </Routes>
    </>
  )
}

export default App

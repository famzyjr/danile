import { useState } from 'react'
import Home from './Pages/Home'
import { Route, Routes } from "react-router-dom"
import Navigation from './Pages/Navigation'
import Blogs from './Pages/Blogs'
import Compose from './components/Compose'
import Accountsettings from './components/Accountsettings'
import Signup from './components/SIgnup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <Navigation /> 
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Blogs" element={<Blogs />} />
                <Route path="/Compose" element={<Compose />} />
                <Route path="/Accountsettings" element={<Accountsettings />} />
                <Route path="/Signup" element={<Signup />} />
           </Routes>
        
       
        
    </div>
   
    </>
  )
}

export default App

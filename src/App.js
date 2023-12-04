import React from 'react'
import Sign from './components/Sign'
import Hero from './components/Hero'
import {Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Sign/>}/>
     <Route path='/hero' element={<Hero/>}/>
     </Routes>
    </div>
  )
}


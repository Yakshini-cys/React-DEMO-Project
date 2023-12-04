import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Medicines from './Medicines'
import Home from './Home'
import Find from './Find'
import Labtest from './Labtest'
import Health from './Health'
import Cart from './Cart'
export default function Navigate() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/buymeds" element={<Medicines/>}/>
    <Route path="/find_doc" element={<Find/>}/>
    <Route path="/labtest" element={<Labtest/>}/>
    <Route path="/healthrecord" element={<Health/>}/>
    <Route path="/mycart" element={<Cart/>}/>
    </Routes>
    </>
  )
}
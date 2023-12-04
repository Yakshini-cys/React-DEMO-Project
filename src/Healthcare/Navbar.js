import React, { Component } from 'react'
import './Navbar.css'
import { MenuItem } from './MenuItems'
import {Link} from 'react-router-dom'
class Navbar extends Component{
    render()
    {
        return(
            <>
        <nav class="navbaritems">
        <h1 class="nav-logo">Fujita Healthcare</h1>
        <ul class="nav-menu">
        {MenuItem.map((item,index)=>{
            return(
                <li key={index}>
                <Link class={item.cName} to={item.url}> <i class={item.icon}></i>{item.title}</Link>
                </li> 
            )
            })}
            <a href='/signup'><button >Sign Up</button></a>
        </ul>
        </nav>
        </>
        )
    }
}
export default Navbar
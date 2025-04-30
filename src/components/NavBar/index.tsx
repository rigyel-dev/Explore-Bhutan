import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" >Home</NavLink> 
      <NavLink to="/culture" >Culture</NavLink>
      <NavLink to="/destinations" >Destinations</NavLink>
      <NavLink to="/travel" >Travel</NavLink>
      <NavLink to="/contaatc" >Contact</NavLink>
    </nav>
  )
}

export default NavBar

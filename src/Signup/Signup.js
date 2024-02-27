import React from 'react'
import './Signup.css';
import Header from './Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './Footer';


function Signup() {
  return (
    <div className='signupcontainer'>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default Signup
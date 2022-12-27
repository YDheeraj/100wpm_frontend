
import Header from '../header/Header'
import React from 'react'
import './home.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {

  return (
    <>
    <div className='home-container1'>
    <Header></Header>
    </div>
    <div >
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default Home
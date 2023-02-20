

import React from 'react'
import './home.css'
import typeimg from '../../images/keyboard02.jpg'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'

const Home = () => {

  const navigate=useNavigate();
  const gotoinstruction=()=>{
    navigate('/Learn');
  }

  const gototest=()=>{
    navigate('/Typingetst/test');
  }

  const gotoTutorpage=()=>{
    navigate('/typingTutor');
  }


  return (
    <>
    <div className='container'>
    <div className='grad-dark'>
    <div className='top-content'>
       <div className='top-content-left'>
        <img src={typeimg} alt="keyboardimg"></img>
       </div>
       <div className='top-content-right'>
       <h2>Learn Typing</h2>
        <p>Learn to type faster with 100wpm typing tutor. Take our typing lessons for free.</p>
        <button onClick={gotoTutorpage} className='btn' style={{marginLeft:"0"}}>Start with Lesssons</button>
       </div>
    </div>
    </div>
    <div className='bottm-container'>
    <div className='middle-content'>
      <div className='middle-content-left'>
       <h2 >Take a typing test</h2>
       <p>Take an online typing test to find out your typing speed and impress friends or employers with your personal typing certificate.</p>
       <button style={{marginLeft:"0"}} onClick={gototest} className='btn'>Take a Typing Test &gt;</button>
      </div>
      <div className='middle-content-right'>
         <h2>Learn Typing</h2>
         <p>Speed up your learning progress with Ratatype typing tutor and develop valuable keyboarding skills!</p>
       <button style={{marginLeft:"0"}} onClick={gotoinstruction} className='btn'>How to Touch Type &gt;</button>
       </div>
    </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home


import React, { useRef, useState } from 'react'
import Accuracy from '../accuracy/Accuracy';
import ParaPreview from '../parapreview/ParaPreview';
import Speed from '../speed/Speed';
import text from '../text/text'
import './typingtest.css'
import {VscDebugRestart} from  "react-icons/vsc";
import {GiPistolGun} from  "react-icons/gi";

import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import { setTrue,setFalse} from '../../actions';
import { useDispatch } from 'react-redux';
import store from '../../store';


const para=text();
export const Test= () => {
  const state=store.getState();
  const data=Object.values(state);


  const settruefalse=useDispatch();


const [input,setinput]=useState("");
const [symbol,setSymbol]=useState(0);
const [finished,setFinished]=useState(false);

const navigate=useNavigate();

const onRestart=()=>{
    setinput("");
    setSymbol(0);
    settruefalse(setFalse());
    setFinished(false);
    navigate('/Typingetst/StartTyping');

}


const handleInput=(e)=>{

  if(!data[0]){
    settruefalse(setTrue());
  }
   const v=e.target.value;
     setinput(v);
     onFinish(v);
     setSymbol(countCorrectSymbol(v));
}

const countCorrectSymbol=(str)=>{
    const arr = para.split('');
    let ans=str.split('').filter((s,i) => s === arr[i]).length;
    return ans;
}

const inputref=useRef(null);

const gotostats=useNavigate();
const onFinish=(str)=>{
  const gotoStartTypingtest=()=>{
    gotostats('/TestResult');
  }
 
  if(para.length===str.length){
    gotoStartTypingtest();
    setFinished(true);
    settruefalse(setFalse()); 

  }
}


  return (
    <>
      <div onClick={()=>{inputref.current.focus()}}   className='grad-dark main-container'>
        <div className='typingTest-Container'>
     <div className='paraPreview-container'> <ParaPreview para={para} userInput={input} textColor={"#fff"} textColor2={"#F36747"} backgroundC={"back-white"}></ParaPreview></div>
     <div className='stats-typingtest'>
     <Speed symbol={symbol} start={data[0]}></Speed>
     <Accuracy para={para} userInput={input} ></Accuracy>
     <div className='restart-container'>
    <VscDebugRestart style={{width:"20px",height:"20px",textTransform:"none"}}></VscDebugRestart>
    <button className='restart-btn' onClick={onRestart}>Restart</button>
    </div>
     </div>
    </div>
    <input ref={inputref}  style={{position:"absolute",zIndex:"-5"}} value={input} onChange={handleInput} autoFocus  readOnly={finished}></input>
    </div >
    <div>
    <Footer></Footer>
    </div>
    </>



  )
}




export const Typingtest=()=>{
  const navigate=useNavigate();
  const gotoStartTypingtest=()=>{
    navigate('/Typingetst/StartTyping');
  }

  
  return (
    <>
    <div className='grad-dark main-container1'>

    <div className='background-container'>
      <div className='inner-container'>
    <h1 style={{color:"white",marginBottom:"30px"}}>Typing test</h1>
    <p style={{color:"white",fontSize:"20px",fontWeight:"500"}}>Typing test

You can test your typing speed in wpm on English and impress your friends or employers with your own typing certificate. Test your typing speed, and find out how fast you type, and then improve your typing speed if necessary.</p>
    <button className='btn' onClick={gotoStartTypingtest}>Start Typing</button>
    </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}


export const StartTyping=()=>{
  const navigate=useNavigate();
  const startType=()=>{
    navigate('/Typingetst/test');
  }

  return (
    <>
    <div className='startType-main-box'>
      <div className='startType-logo-box-outer'>
        <div className='startType-logo'>
       <GiPistolGun></GiPistolGun>
       </div>
      </div>
      <div className='bottom-container'>
      <h1>Please be prepared. Good luck! </h1>
      <button className='btn' onClick={startType}>Start Typing Now</button>
      </div>
    </div>
    </>
  )
}




export default Typingtest
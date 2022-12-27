

import React, { useRef, useState } from 'react'
import Accuracy from '../accuracy/Accuracy';
import ParaPreview from '../parapreview/ParaPreview';
import Speed from '../speed/Speed';
import text from '../text/text'
import './typingtest.css'
import {VscDebugRestart} from  "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import img1 from '../../images/keyboard01.jpg';



const para=text();
export const Test= () => {

const [input,setinput]=useState("");
const [symbol,setSymbol]=useState(0);
const [start,setStart]=useState(false);
const [finished,setFinished]=useState(false);


const onRestart=()=>{
    setinput("");
    setSymbol(0);
    setStart(false);
    setFinished(false);
}



const handleInput=(e)=>{

  if(!start){
    setStart(true);
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




const onFinish=(str)=>{

  if(para.length===str.length){
    setFinished(true);
    setStart(false);
  }
}

  return (
    <>
      <div className='grad-dark main-container'>
        <div className='typingTest-Container'>
     <div className='paraPreview-container'> <ParaPreview para={para} userInput={input}></ParaPreview></div>
     <div className='stats-typingtest'>
     <Speed symbol={symbol} start={start}></Speed>
     <Accuracy para={para} userInput={input} ></Accuracy>
     <div className='restart-container'>
    <VscDebugRestart style={{width:"20px",height:"20px",textTransform:"none"}}></VscDebugRestart>
    <button className='restart-btn' onClick={onRestart}>Restart</button>
    </div>
     </div>
    </div>
    <input type="hidden" value={input} onChange={handleInput} autoFocus  readOnly={finished}></input>
    </div>

    </>



  )
}


const Typingtest=()=>{
  const navigate=useNavigate();
  const startType=()=>{
    navigate('/Typingetst/test');
  }

  return (
    <>
    <div className='grad-dark main-container1'>
    <div className='background-container'>
      <div className='inner-container'>
    <h1 style={{color:"white",marginBottom:"30px"}}>Typing test</h1>
    <p style={{color:"white",fontSize:"20px",fontWeight:"500"}}>Typing test

You can test your typing speed in wpm on English and impress your friends or employers with your own typing certificate. Test your typing speed, and find out how fast you type, and then improve your typing speed if necessary.</p>
    <button className='btn' onClick={()=>startType()}>Start Typing</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Typingtest

import React,{useRef} from 'react'
import ParaPreview from '../parapreview/ParaPreview'
import '../typingTutor/typingtutor.css'
import TutorLessons from './TutorLessons'
import { useState,useEffect } from 'react'
import Footer from '../footer/Footer'
import { useNavigate } from 'react-router-dom';
import { setTrue,setFalse} from '../../actions';
import { useDispatch } from 'react-redux';
import store from '../../store'
import { setAccuracy,setWpm } from '../../actions';

const chapters=TutorLessons();
console.log(chapters);
const para= chapters[0][1];
const TypingTutor = () => {

const truefalse=useDispatch();
 const state=store.getState();
 const data=Object.values(state);

  const [input,setinput]=useState("");
const [symbol,setSymbol]=useState(0);
const [finished,setFinished]=useState(false);


const onRestart=()=>{
    setinput("");
    setSymbol(0);
    truefalse(setFalse());
    setFinished(false);}



const handleInput=(e)=>{

  if(!data[1]){
    truefalse(setTrue());
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



const gotostats=useNavigate();
const onFinish=(str)=>{
  const gotoStartTypingtest=()=>{
    gotostats('/LessonResult');
  }
  if(para.length===str.length){
    onRestart();
    gotoStartTypingtest();
    setFinished(true);
    truefalse(setFalse()); 
  }
}

const inputref=useRef(null);

  return (
    <>
    <div onClick={()=>{inputref.current.focus()}} className='grad-dark'>
       <div className='course-detail-outer'>
        <div className='course-detail-left'>
           <div className='course'>
            <h5>course</h5>
            <select><option value="1">1.English</option></select>
           </div>
           <div className='lessons'>
            <h5>Lessons</h5>
            <select className="navSelect-large" id="selLesson"><option value="1">1. Home Row Position</option><option value="2">2. Index Fingers</option><option value="3">3. Middle and Ring Fingers</option><option value="4">4. Pinkies</option><option value="5">5. Repetition 1</option><option value="6">6. Repetition 2</option><option value="7">7. Repetition 3</option><option value="8">8. Repetition 4</option><option value="9">9. Vowels cryptogram</option><option value="10">10. Alphabet cryptogram</option><option value="11">11. Common Combinations</option><option value="12">12. Numbers and Punctuation</option><option value="13">13. Using Shift Key</option><option value="14">14. Numbers and Punctuation 2</option><option value="15">15. Sentences</option></select>
           </div>
           <div className='exercirse'>
            <h5>Exercise</h5>
            <select id="selString"><option value="1">1. A bad workman</option><option value="2">2. Better a glorious</option><option value="3">3. Calamity is man's</option><option value="4">4. Eat at pleasure</option><option value="5">5. He who pleased</option><option value="6">6. Jack of all</option><option value="7">7. Keep a thing</option><option value="8">8. Make hay</option><option value="9">9. Between two stools</option><option value="10">10. Roll my log</option><option value="11">11. Scornful dogs</option><option value="12">12. We never know</option><option value="13">13. Old birds</option><option value="14">14. Zeal without knowledge</option><option value="15">15. Better die</option><option value="16">16. Looks like</option></select>
           </div>
        </div>
        <div className='course-detail-right'>
           <div className='show-keyboard'>
           <h5>WPM</h5>
           <Wpm symbol={symbol} start={data[0]}></Wpm>
           </div>
           <div className='show-keyboard'>
           <h5>Typos</h5>
           <WpmAccuracy para={para} userInput={input} ></WpmAccuracy>
           </div>
        </div>
       </div>
       <div className=''>
       <div className='bottom-text-container' >
       <ParaPreview para={para} userInput={input} textColor={"#d2d2d2"} textColor2={"#F36747"} backgroundC={"line"}></ParaPreview>
       </div>
       <div>
       <input ref={inputref} style={{position:"absolute",zIndex:"-5"}} value={input} onChange={handleInput} autoFocus  readOnly={finished}></input>
       </div>
       </div>
    </div>
    <Footer></Footer>
    </>
  )
}



export const Wpm = ({symbol,start}) => {
  const [sec,setSec]=useState(0);
  let id;
  useEffect(()=>{
     if(start){
       id=setInterval(() => {
         setSec((prev)=>prev+1);
       }, 1000);
     }
     return ()=>{
       clearInterval(id);
     }
  },[start])

   let wpm=0;
  if(symbol!==0 && sec!==0){
    wpm=(((symbol/5)/(sec))*60);
}

const sendWpm=useDispatch();
sendWpm(setWpm(Math.round(wpm)));

return (
  <>
  <span>{Math.round(wpm)}</span>
  </>
)
}


const WpmAccuracy = ({para,userInput}) => {
  const text=para.split('');
    const useInputarr=userInput.split('');
    let num=0;
const cnt=()=>{
  const len=text.map((s,i)=>{
    if(i<useInputarr.length){
      if(s!==useInputarr[i]){
         num++;
      }
    }
  });
  return num;
  
}

const sendAccuracy=useDispatch();
sendAccuracy(setAccuracy(cnt()));

return(
  <>
   <span>{cnt()}</span>
  </>
)

}

export default TypingTutor


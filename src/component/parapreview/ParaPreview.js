import React, { useEffect, useRef } from 'react'
import './parapreview.css';

const ParaPreview = ({para,userInput}) => {
    const text=para.split('');
    const useInputarr=userInput.split('');
    
    let change=useRef(null);
const changecolor=(i)=>{
  const span=change.current.children[i];
  span.className="back-white";
}


const changecolor2=(i)=>{
  const span=change.current.children[i-1];
  span.className="";
}

const changecolor3=(i)=>{
  console.log(i+1);
  if((i+1)<text.length){
  const span=change.current.children[i+1];
  span.className="";
}
}






  return (
    <>
    <div ref={change}>
        {
         text.map((s,i)=>{
            let color;
            let background;
            if(i<useInputarr.length){
              if(useInputarr.length<text.length){
                  changecolor(useInputarr.length);
                  changecolor2(useInputarr.length);
                  changecolor3(useInputarr.length);
                  
              }
                s===useInputarr[i]?color="#fff":color="#F36747";
                
            }
             return <span key={i} style={{color:color}} className="">{s}</span>
         })
        }
    </div>
    </>
  )
}

export default ParaPreview
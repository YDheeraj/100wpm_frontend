
import store from '../../../store'
import './testResult.css'
import {GiOnTarget} from "react-icons/gi"
import {SlSpeedometer} from "react-icons/sl"


const TestResult = () => {

  const state=store.getState();
  const data=Object.values(state);

  return (
    <>
    <div className='grad-dark'>
    <div class="speed-accuracy">
  <div class="speed">
    <div className='speed-head'>
    <SlSpeedometer  style={{width:"20px",height:"20px",paddingBottom:"10px"}}></SlSpeedometer>
    <p class="speed-label">SPEED</p>
    </div>
    <p class="speed-value">{data[1]}<span>WPM</span></p>
  </div>
  <div class="accuracy">
  <div className='accuracy-head'>
    <GiOnTarget  style={{width:"20px",height:"20px",paddingBottom:"10px"}}></GiOnTarget>
    <p class="accuracy-label">ACCURACY</p>
    </div>
    <p class="accuracy-value">{data[2]}<span>%</span></p><hr style={{color:"black"}}></hr>
  </div>
</div>
    </div>
    </>
  )
}

export default TestResult


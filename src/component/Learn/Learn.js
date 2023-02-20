

import React from 'react'
import Footer from '../footer/Footer'
import '../Learn/learn.css'

const Learn = () => {
  return (
    <>
    <div className='learn-main-container'>
    <div className='learn-inner-container'>
      <div className='learn-contents box0'>
        <div></div>
        <h1>Learn how to touch type</h1>
        <p>Touch typing is all about the idea that each finger has its own area on the keyboard. Thanks to that fact you can type without looking at the keys. Practice regularly and your fingers will learn their location on the keyboard through muscle memory. </p>
      </div>
      <div className='learn-contents box1'>
        <h2>Sitting posture for typing</h2>
        <ul>
                        <li>Sit straight and remember to keep your back straight.</li>
                        <li>Keep your elbows bent at the right angle.</li>
                        <li>Face the screen with your head slightly tilted forward.</li>
                        <li>Keep at least 45 - 70 cm of distance between your eyes and the screen.</li>
                        <li>Еxpose the shoulder, arm, and wrist muscles to the least possible strain. The wrists can touch the tabletop in front of the keyboard. Never shift your body weight to the wrists by resting on them.</li>
                    </ul>
      </div>
      <div className='learn-contents box2'>
        <h2>Home row position</h2>
        <p>Curve your fingers a little and put them on the ASDF and JKL; keys which are located in the middle row of the letter keys. This row is called HOME ROW because you always start from these keys and always return to them.</p>
        <p class="cut-bottom">F and J keys under your index fingers should have a raised line on them to aide in finding these keys without looking.</p>
      </div>
      <div className='learn-contents box3'>
      <p>The color-coded keyboard under lesson input field will help you to understand which finger should press each key.</p>
      <ul>
                        <li>Hit keys only with the fingers for which they have been reserved.</li>
                        <li>Always return to the starting position of the fingers "ASDF – JKL;".</li>
                        <li>When typing, imagine the location of the symbol on the keyboard.</li>
                        <li>Establish and maintain a rhythm while typing. Your keystrokes should come at equal intervals.</li>
                        <li>The SHIFT key is always pressed by the pinky finger opposite to the one hitting the other key.</li>
                        <li>Use the thumb of whichever hand is more convenient for you to press the Space bar.</li>
                    </ul>
      </div>
      <div className='learn-contents box4'>
       <h2>Fingers motion</h2>
       <p>Don't look at the keys when you type. Just slide your fingers around until they find the home row marking.</p>
       <p>Limit your hand and finger movement only to what is necessary to press a specific key. Keep your hands and fingers close to the base position. This improves typing speed and reduces stress on the hands.</p>
       <p>Pay attention to ring fingers and little fingers, since they are considerably underdeveloped.</p>
      </div>
      <div className='learn-contents box5'>
        <h2>Typing speed</h2>
        <ul>
                        <li>
                            Do not rush when you just started learning. Speed up only when your fingers hit the right keys out of habit.
                        </li>
                        <li>
                            Take your time when typing to avoid mistakes. The <a href="/learn/typing-speed-research-how-to-save-21-day-per-year-while-typing/">speed will pick up as you progress</a>.
                        </li>
                        <li>Always scan the text a word or two in advance.</li>
                        <li>
                            Pass all typing lessons at Ratatype. It will help you to get above the <a href="/learn/average-typing-speed/">average typing speed</a>.
                        </li>
                    </ul>
      </div>
      <div className='learn-contents box6'>
        <h2>Take care of yourself</h2>
        <p>Take a break if you feel that you get distracted easily and are making a lot of mistakes. It is more productive to come back when you feel refreshed.</p>
      </div>
      <div className='learn-contents box7'>
        <button className='btn'>It's time to get some practice</button>
      </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Learn
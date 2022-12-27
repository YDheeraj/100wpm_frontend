import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Learn from './component/Learn/Learn';
import Typingtest, { Test } from './component/LearnTest/Typingtest';
import TypingTutor from './component/typingTutor/TypingTutor';
import Error from './component/Error/Error';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}>
      <Route path='/typingtest' element={<Typingtest></Typingtest>}></Route>
      <Route path='/typingTutor' element={<TypingTutor></TypingTutor>}></Route>
      <Route path='/Learn' element={<Learn></Learn>}></Route>
      <Route path='/Typingetst/test' element={<Test></Test>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

import React from 'react'
// import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import HomePage from './components/HomePage';
const App = () => {
  return (
    <section>
      {/* <Routes> */}
        {/* <Route exact path='/' element={<HomePage/>}></Route> */}
        {/* <Route exact path='/about' element={<About/>}></Route> */}
      {/* </Routes> */}

      <HomePage/>
      {/* <About/> */}
    </section>
  )
}

export default App


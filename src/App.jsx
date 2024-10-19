import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './onBoarding/Login';
import Register from './onBoarding/Register';
import LandingPage from './Landing/LandingPage';
import HomePage from './Landing/HomePage';
import Vacation from './Landing/Vacation';
import ScrollToTop from './ScrollToTop';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route element={<LandingPage/>} >
            <Route path='/' element={<HomePage/>} />
            <Route path='/vacation' element={<Vacation/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

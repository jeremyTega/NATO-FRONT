import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './onBoarding/Login';
import Register from './onBoarding/Register';
import LandingPage from './Landing/LandingPage';
import HomePage from './Landing/HomePage';
import Vacation from './Landing/Vacation';
import ScrollToTop from './ScrollToTop';
import BookVacation from './Landing/BookVacation';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from './onBoarding/ForgotPassword';
import ResetPassword from './onBoarding/ResetPassword';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/reset-password/:token' element={<ResetPassword/>} />
          <Route element={<LandingPage/>} >
            <Route path='/' element={<HomePage/>} />
            <Route path='/vacation' element={<Vacation/>} />
            <Route path='/book-vacation' element={<BookVacation/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App

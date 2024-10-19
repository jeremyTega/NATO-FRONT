import React from 'react';
import "./landingCss/landingPage.css";
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
  return (
    <>
      <div className='landing_page_body'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default LandingPage

import React, { useState, useEffect, useRef } from 'react';
import "./landingCss/homePage.css";
import { IoMdArrowForward } from "react-icons/io";
import news_first_image from '../assets/news_first_image.jpg';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import VacationsCard from '../components/VacationsCard';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false);
  const parentRef = useRef(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("natoUser")) || '')

  const checkVisibility = () => {
    if (parentRef.current) {
      const parentHeight = parentRef.current.offsetHeight;
      setIsVisible(parentHeight >= 100);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkVisibility);
    return () => window.removeEventListener('resize', checkVisibility);
  }, []);

  const explorePackages = ()=>{
    if(user == ''){
      navigate("/login")
    }else{
      navigate("/vacation")
    }
  }

  return (
    <>
      <div className='home_page_body'>
        <section className='hero_section'>
          <h1>Plan Your Well-Deserved Break!</h1>
          <p>Discover the best vacations tailored for our heroes</p>
          <button onClick={explorePackages}>Explore Packages</button>
        </section>

        <section className='destination_section'>
          <h1>Our Available Vacations</h1>
          <VacationsCard limit={4}/>
          <div className='home_packages_see_more_container'>
            <span onClick={()=>navigate('/vacation')}>
              <p>View More</p>
              <IoMdArrowForward/>
            </span>
          </div>
        </section>

        <section className='news_section'>
          <h1>LATEST NEWS</h1>
          <div className='news_container'>
            <div className='news_container_left'>
              <img src={news_first_image} alt='first_image'/>
              <div 
                className='news_container_left_text_container'
                ref={parentRef}
                onMouseEnter={checkVisibility}
                onMouseLeave={() => setIsVisible(false)}
              >
                <p>16 Oct. 2024</p>
                <h2>Secretary General Welcomes Sweden's plans to boost defence spending</h2>
                <h3
                  style={{ visibility: isVisible ? 'visible' : 'hidden' }}
                >On Wednesday (October 16), NATO Secretary General Mark Rutte and the Prime Minister of Sweden Ulf Kristersson met at NATO Headquarters in Brussels to discuss the strengthening of NATO’s deterrence and defence and NATO’s increased support to Ukraine.</h3>
              </div>
            </div>
            <div className='news_container_right'>
              <div className='news_container_right_left_side'>
                <div className='left_side_card'>
                  <img src='' alt=''/>
                  <p>Secretary General praises Lavita for its contributions to NATO</p>
                </div>
                <div className='left_side_card'>
                  <img src='' alt=''/>
                  <p>NATO Secretary General visits SHAPE and new  NATO command to support security assistance to Ukraine based in Germany</p>
                </div>
              </div>
              <div className='news_container_right_right_side'>
                <p>Secretary General praises the United Kingdom's contribution to NATO and Ukraine</p>
                <p>NATO holds annual nuclear exercise: Steadfast Noon</p>
                <p>Secretary General thanks president of Finland for contributions to NATO and Ukraine</p>
                <p>NATO Secretary General in kyiv</p>
                <p>ALL NEWS<span><MdOutlineKeyboardDoubleArrowRight/></span></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage

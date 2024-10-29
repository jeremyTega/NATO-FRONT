import React, { useEffect, useState } from 'react';
import './componentsCss/vacationcard.css';
import hawai_image from '../assets/hawai_image.jpg';
import alaska_image from '../assets/alaska_image.jpg';
import oklahoma_image from '../assets/oklahoma_image.jpg';
import san_diego_image from '../assets/san_diego_image.jpg';
import Vacations from './Vacations.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VacationsCard = ({limit}) => {

    const navigate = useNavigate();
    const images = [hawai_image, alaska_image, oklahoma_image, san_diego_image]
    const vacationsToDisplay = limit ? Vacations.slice(0,limit) : Vacations;
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("natoUser")) || '')

    const getAllVacations = async ()=>{
        const url = "https://nato-vacation.onrender.com/api/seeAllVacation"
        try{
            const response = await axios.get(url)
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllVacations()
    },[])

    const bookNow = (destination)=>{
        if(user == ''){
            navigate("/login")
        }else{
            navigate(`/book-vacation?destination=${encodeURIComponent(destination)}`);
        }
    }

  return (
    <>
        <div className='destination_card_container'>
            {
                vacationsToDisplay.map((vacation, index)=>(
                    <div key={index} className='destination_card'>
                        <div className='destination_image_container'>
                            <img src={images[index]} alt='destination image'/>
                        </div>
                        <h3>{vacation.place}</h3>
                        <p>{vacation.description}</p>
                        <button onClick={()=>bookNow(vacation.place)}>Book Now</button>
                     </div>
                ))
            }
        </div>
    </>
  )
}

export default VacationsCard

import React from 'react';
import './componentsCss/vacationcard.css';
import hawai_image from '../assets/hawai_image.jpg';
import alaska_image from '../assets/alaska_image.jpg';
import oklahoma_image from '../assets/oklahoma_image.jpg';
import san_diego_image from '../assets/san_diego_image.jpg';
import Vacations from './Vacations.json';

const VacationsCard = ({limit}) => {

    const images = [hawai_image, alaska_image, oklahoma_image, san_diego_image]
    const vacationsToDisplay = limit ? Vacations.slice(0,limit) : Vacations;

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
                        <button>Book Now</button>
                     </div>
                ))
            }
        </div>
    </>
  )
}

export default VacationsCard

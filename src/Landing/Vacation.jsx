import React from 'react';
import './landingCss/vacation.css';
import VacationsCard from '../components/VacationsCard';

const Vacation = ()=>{

    return(
        <>
            <div className='vacation_body'>
                <section className='vacation_page_writeUp_container'>
                    <h1>Explore Top Vacation Destinations</h1>
                    <p>
                        Discover the most beautiful places around the world. Whether you're looking for 
                        a peaceful retreat or an adventurous trip, our selection of destinations will inspire 
                        your next journey.
                    </p>
                </section>
                <section className='vacation_card_section'>
                    <VacationsCard/>
                </section>
            </div>
        </>
    )
}


export default Vacation
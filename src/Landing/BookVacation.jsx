import React, { useState } from 'react';
import './landingCss/bookVacation.css';
import { useLocation } from 'react-router-dom';

const BookVacation = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const destination = queryParams.get('destination');
    const [formValues, setFormValues] = useState({
        vacationType: '',
        fromDate: '',
        toDate: '',
        destination: destination,
        purposeOfVacation: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

  return (
    <>
        <div className='book_vacation_body'>
            <div className='book_vacation_top_text_container'>
                <h1>Book Your Vacation</h1>
            </div>
            <div className='book_vacation_form_container'>
                <form className='book_vacation_form'>
                    <div className='form_group'>
                        <label>vacation type:</label>
                        <input
                            type='text'
                            placeholder='e.g., leisure, family visit, adventure'
                            name='vacationType'
                            value={formValues.vacationType}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form_group'>
                        <label>from date:</label>
                        <input
                            type='date'
                            name='fromDate'
                            value={formValues.fromDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form_group'>
                        <label>to date:</label>
                        <input
                            type='date'
                            name='toDate'
                            value={formValues.toDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form_group'>
                        <label>Destination:</label>
                        <input
                            type='text'
                            name='destination'
                            value={formValues.destination}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form_group'>
                        <label>purpose of vacation:</label>
                        <input
                            type='text'
                            placeholder='e.g., relaxation, family reunion, training'
                            name='purposeOfVacation'
                            value={formValues.purposeOfVacation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form_button_container'>
                        <button type='submit'>Book Vacation</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default BookVacation

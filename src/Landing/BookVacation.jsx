import React, { useState } from 'react';
import './landingCss/bookVacation.css';
import { useLocation, useNavigate } from 'react-router-dom';

const BookVacation = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const destination = queryParams.get('destination');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("natoUser")) || '')
    const [formValues, setFormValues] = useState({
        vacationType: '',
        from: '',
        to: '',
        destination: destination,
        purpose: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const bookVacation = async ()=>{
        const url = "https://nato-vacation.onrender.com/vacations"
        try{
            
            const response = await axios.post(url, formValues)
            console.log(response)

        }catch(error){
            console.log(error)
        }
    }

    const submit = ()=>{
        if(user == ''){
            navigate("/login")
        }else{
            bookVacation()
        }
    }

  return (
    <>
        <div className='book_vacation_body'>
            <div className='book_vacation_top_text_container'>
                <h1>Book Your Vacation</h1>
            </div>
            <div className='book_vacation_form_container'>
                <form className='book_vacation_form' onSubmit={submit}>
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
                            name='from'
                            value={formValues.from}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form_group'>
                        <label>to date:</label>
                        <input
                            type='date'
                            name='to'
                            value={formValues.to}
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
                            name='purpose'
                            value={formValues.purpose}
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

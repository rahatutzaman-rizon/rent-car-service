

import React from 'react';
import "../../styles/booking-form.css" ;
import { Form , FormGroup } from 'reactstrap';

const BookingForm = () => {

    const submitHandler = event =>{
        event.preventDefault();
    }

    return <Form onSubmit={submitHandler}>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="text" placeholder=' Name'/>
        </FormGroup>
        

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="email" placeholder='Email'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <input type="number" placeholder='Mobile Number'/>
        </FormGroup>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="text" placeholder='Form Address'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <input type="text" placeholder='To Address'/>
        </FormGroup>

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <select name="" id="">
                    <option value="1 person"> 1 Person</option>
                    <option value="2 person"> 2 Person</option>
                    <option value="3 person"> 3 Person</option>
                    <option value="4 person"> 4 Person</option>
                    <option value="4 person"> 8 Person</option>
                    <option value="6+ person">8+ Person </option>
                </select>
        </FormGroup>
       

        <FormGroup className='booking__form d-inline-block me-4 mb-b' >
                <input type="date" placeholder='Journey Date'/>
        </FormGroup>
        <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
                <input type="time" placeholder='Journey Time' className='time__picker'/>
        </FormGroup>

        <FormGroup>
                <textarea rows={1} type="textarea" className='textarea' placeholder='Write'></textarea>
        </FormGroup>

        

    </Form>
};

export default BookingForm;
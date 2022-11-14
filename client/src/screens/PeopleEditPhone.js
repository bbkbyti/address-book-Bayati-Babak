import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PeopleEditPhone(props) {
    const [phoneData, setPhoneData] = useState({
        phone_number: '',
    })

    const { phonesList, handleEditPhone } = props
    const { id } = useParams();

    useEffect(() => {
        const prefillFormDataPhone = () => {
            const phoneItem = phonesList.find((phone) => phone.id === Number(id));
            setPhoneData(phoneItem);
        }
        if (phonesList.length) {
            prefillFormDataPhone()
        }
    }, [id, phonesList])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPhoneData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <div>
            <h3>PeopleEditPhone</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleEditPhone(id, phoneData)
            }}>
                <label>
                    Phone Number:
                    <input
                        type='text'
                        name='phone_number'
                        value={phoneData.phone_number}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <Button>Submit</Button>
            </form>
        </div>
    )
}

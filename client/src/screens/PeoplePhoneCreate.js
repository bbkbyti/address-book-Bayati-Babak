import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function PeoplePhoneCreate(props) {
    const [formData, setFormData] = useState({
        phone_number: '',
        comment: '',
    })
    const { handleCreatePhone } = props;
    const { id } = useParams();



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    return (
        <div>
            <h3>PeoplePhoneCreate</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleCreatePhone(formData);
            }}>
                <label>
                    Phone Number:
                    <input
                        type='text'
                        name='phone_number'
                        value={formData.phone_number}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Comment:
                    <input
                        type='text'
                        name='comment'
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Add</button>
            </form>
        </div>
    )
}

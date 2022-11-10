import React, { useState, useEffect } from 'react';

import { addPerson } from '../services/people';

export default function PeopleCreate(props) {
    const [formData, setFormData] = useState({
        salutation: '',
        first_name: '',
        last_name: '',
    })
    const { handleCreate } = props
    const { salutation, first_name, last_name } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }



    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleCreate(formData)
            }} >
                <h3>Add New Person</h3>
                <label>
                    Salutation
                    <input
                        type='text'
                        name='salutation'
                        value={salutation}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type='text'
                        name='first_name'
                        value={first_name}
                        onChange={handleChange}
                    />
                </label>
                Last Name:
                <label>
                    <input
                        type='text'
                        name='last_name'
                        value={last_name}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

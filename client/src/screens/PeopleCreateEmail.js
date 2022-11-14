import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getOnePerson } from '../services/people';
// import { Button } from 'react-bootstrap';


export default function PeopleCreateEmail(props) {

    const [emailData, setEmailData] = useState({
        email_address: '',
        comment: '',
    })


    const { email_address, comment } = emailData;
    const { handleCreateEmail, peopleList } = props;
    const { id } = useParams();




    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    return (
        <div>
            <h3>PeopleCreateEmail</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                emailData.person_id = id
                handleCreateEmail(emailData)
            }}>
                <label>
                    Email Address:
                    <input
                        type='text'
                        name='email_address'
                        value={email_address}
                        required
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Comment:
                    <input
                        type='textarea'
                        name='comment'
                        value={comment}
                        onChange={handleChange}
                    />
                </label>
                {/* <label>
                    <input
                        type='text'
                        name='person_id'
                        value={person.id}
                        onChange={handleChange}
                    />
                </label> */}
                <button>Add</button>
            </form>
        </div>
    )
}

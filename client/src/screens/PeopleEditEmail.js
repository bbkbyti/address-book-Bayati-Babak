import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PeopleEditEmail(props) {

    const [emailData, setEmailData] = useState({
        email_address: '',
    })
    const { id } = useParams();
    const { emailsList, handleEditEmail } = props;

    useEffect(() => {
        const prefillFormDataEmail = () => {
            const emailItem = emailsList.find((email) => email.id === Number(id));
            setEmailData(emailItem);
        }
        if (emailsList.length) {
            prefillFormDataEmail()
        }
    }, [id, emailsList])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div>
            <h3>PeopleEditEmail</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleEditEmail(id, emailData);
            }}>
                <label>
                    Email:
                    <input
                        type='text'
                        name='email_address'
                        value={emailData.email_address}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

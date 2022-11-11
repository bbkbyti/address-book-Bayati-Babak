import React, { useState } from 'react'

export default function PeopleCreateEmail(props) {
    const [emailData, setEmailData] = useState({
        email_address: '',
        comment: '',
    })
    const { email_address, comment } = emailData;
    const { handleCreateEmail } = props;

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
                <br />
                <button>Add</button>
            </form>
        </div>
    )
}

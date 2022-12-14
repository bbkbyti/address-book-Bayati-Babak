import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function PeopleEditAddress(props) {
    const [addressData, setAddressData] = useState({
        street: '',
        town: '',
        zip_code: '',
        state: '',
        country: '',
    })
    const { id } = useParams();
    const { addressList, handleEditAddress, handleDeleteAddress } = props

    useEffect(() => {
        const prefillFormDataAddress = () => {
            const addressItem = addressList.find((add) => add.id === Number(id));
            console.log(addressItem);
            setAddressData({
                street: addressItem.street,
                town: addressItem.town,
                zip_code: addressItem.zip_code,
                state: addressItem.state,
                country: addressItem.country,
            })
        }
        if (addressList.length) {
            prefillFormDataAddress();
        }
    }, [id, addressList,])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            <h3>PeopleEditAddress</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleEditAddress(id, addressData)
            }}>
                <label>
                    Street:
                    <input
                        type='text'
                        name='street'
                        value={addressData.street}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Town:
                    <input
                        type='text'
                        name='town'
                        value={addressData.town}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Zip Code:
                    <input
                        type='text'
                        name='zip_code'
                        value={addressData.zip_code}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    State:
                    <input
                        type='text'
                        name='state'
                        value={addressData.state}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Country:
                    <input
                        type='text'
                        name='country'
                        value={addressData.country}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Edit</button>
                <Link to={`/people/${id}`}>
                    <button onClick={() => handleDeleteAddress(addressData.id)}>Delete</button>
                </Link>

            </form>
        </div>

    )
}

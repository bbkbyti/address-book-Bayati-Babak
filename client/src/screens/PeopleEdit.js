import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function PeopleEdit(props) {
    const [addressData, setAddressData] = useState({
        street: '',
        town: '',
        zip_code: '',
        state: '',
        country: '',
    })

    const { id } = useParams();
    const { addressList } = props

    useEffect(() => {
        const prefillFormData = () => {
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
            prefillFormData();
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
            <h3>People Edit</h3>
            <form>
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
            </form>
        </div>
    )
}

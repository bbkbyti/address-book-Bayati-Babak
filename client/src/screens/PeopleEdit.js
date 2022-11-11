import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function PeopleEdit(props) {
    const [nameData, setNameData] = useState({
        salutation: '',
        first_name: '',
        last_name: '',
    })

    const [addressData, setAddressData] = useState({
        street: '',
        town: '',
        zip_code: '',
        state: '',
        country: '',
    })

    const [emailData, setEmailData] = useState({
        email_address: '',
    })

    const [phoneData, setPhoneData] = useState({
        phone_number: '',
    })


    const { id } = useParams();
    const { addressList, peopleList, emailsList, phonesList } = props

    useEffect(() => {
        const prefillFormDataName = () => {
            const nameItem = peopleList.find((person) => person.id === Number(id));
            console.log(nameItem);
            setNameData(nameItem);
        }
        if (peopleList.length) {
            prefillFormDataName();
        }
    }, [id, peopleList])

    useEffect(() => {
        const prefillFormDataAddress = () => {
            const addressItem = addressList.find((add) => add.id === Number(id));
            // console.log(addressItem);
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

    useEffect(() => {
        const prefillFormDataEmail = () => {
            const emailItem = emailsList.find((email) => email.id === Number(id));
            setEmailData(emailItem);
        }
        if (emailsList.length) {
            prefillFormDataEmail()
        }
    }, [id, emailsList])

    useEffect(() => {
        const prefillFormDataPhone = () => {
            const phoneItem = phonesList.find((phone) => phone.id === Number(id));
            setPhoneData(phoneItem);
        }
        if (phonesList.length) {
            prefillFormDataPhone()
        }
    }, [id, phonesList])

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setNameData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangePhone = (e) => {
        const { name, value } = e.target;
        setPhoneData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleChangeEmail = (e) => {
        const { name, value } = e.target;
        setEmailData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleChangeAddress = (e) => {
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
                    Salutation:
                    <input
                        type='text'
                        name='salutation'
                        value={nameData.salutation}
                        onChange={handleChangeName}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type='text'
                        name='first_name'
                        value={nameData.first_name}
                        onChange={handleChangeName}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type='text'
                        name='last_name'
                        value={nameData.last_name}
                        onChange={handleChangeName}
                    />
                </label>
                <label>
                    Street:
                    <input
                        type='text'
                        name='street'
                        value={addressData.street}
                        onChange={handleChangeAddress}
                    />
                </label>
                <label>
                    Town:
                    <input
                        type='text'
                        name='town'
                        value={addressData.town}
                        onChange={handleChangeAddress}
                    />
                </label>
                <label>
                    Zip Code:
                    <input
                        type='text'
                        name='zip_code'
                        value={addressData.zip_code}
                        onChange={handleChangeAddress}
                    />
                </label>
                <label>
                    State:
                    <input
                        type='text'
                        name='state'
                        value={addressData.state}
                        onChange={handleChangeAddress}
                    />
                </label>
                <label>
                    Country:
                    <input
                        type='text'
                        name='country'
                        value={addressData.country}
                        onChange={handleChangeAddress}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='text'
                        name='email_address'
                        value={emailData.email_address}
                        onChange={handleChangeEmail}
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type='text'
                        name='phone_number'
                        value={phoneData.phone_number}
                        onChange={handleChangePhone}
                    />
                </label>
            </form>
        </div>
    )
}

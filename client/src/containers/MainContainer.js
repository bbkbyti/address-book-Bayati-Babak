import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { addPerson, editPerson, getAllPeople } from '../services/people';
import { addAddress, editAddress, getAllAddresses } from '../services/addresses';
import { editEmail, getAllEmails } from '../services/emails';
import { editPhone, getAllPhones } from '../services/phones';
import PeopleList from '../screens/PeopleList';
import PeopleDetail from '../screens/PeopleDetail';
import PeopleCreate from '../screens/PeopleCreate';
import PeopleEditAddress from '../screens/PeopleEditAddress';
import PeopleEditEmail from '../screens/PeopleEditEmail';
import PeopleEditName from '../screens/PeopleEditName';
import PeopleEditPhone from '../screens/PeopleEditPhone';

export default function MainContainer(props) {
    const [peopleList, setPeopleList] = useState([]);
    const [addressList, setAddressList] = useState([]);
    const [emailsList, setEmailsList] = useState([]);
    const [phonesList, setPhonesList] = useState([]);

    const navigate = useNavigate();
    const { currentUser } = props;

    // PEOPLE: 

    useEffect(() => {
        const fetchPeople = async () => {
            const allPeople = await getAllPeople()
            setPeopleList(allPeople)
        }
        fetchPeople();
    }, [])

    const handleEditName = async (id, formData) => {
        const personNameData = await editPerson(id, formData);
        setPeopleList((prevState) => prevState.map((person) => {
            return person.id === Number(id) ? personNameData : person
        }))
        navigate('/people')
    }


    // ADDRESS:

    useEffect(() => {
        const fetchAddresses = async () => {
            const addressList = await getAllAddresses()
            setAddressList(addressList)
        }
        fetchAddresses();
    }, [])

    const handleEditAddress = async (id, formData) => {
        const addressData = await editAddress(id, formData);
        setAddressList((prevState) => prevState.map((address) => {
            return address.id === Number(id) ? addressData : address
        }))
        navigate(`/people/${id}`)
    }

    // EMAILS:

    useEffect(() => {
        const fetchAllEmails = async () => {
            const allEmails = await getAllEmails()
            setEmailsList(allEmails)
        }
        fetchAllEmails()
    }, [])

    const handleEditEmail = async (id, formData) => {
        const emailData = await editEmail(id, formData);
        setEmailsList((prevStat) => prevStat.map((email) => {
            return email.id === Number(id) ? emailData : email
        }))
        navigate(`/people/${id}`)
    }

    // PHONE NUMBERS:

    useEffect(() => {
        const fetchAllPhones = async () => {
            const phonesList = await getAllPhones()
            setPhonesList(phonesList)
        }
        fetchAllPhones()
    }, [])

    const handleEditPhone = async (id, formData) => {
        const phoneData = await editPhone(id, formData);
        setPhonesList((prevState) => prevState.map((phone) => {
            return phone.id === Number(id) ? phoneData : phone
        }))
        navigate(`/people/${id}`)
    }

    const handleCreate = async (formData) => {
        const personData = await addPerson(formData);
        setPeopleList((prevState) => [...prevState, personData]);
        navigate('/people')
    }


    return (
        <div>
            <Routes>
                <Route exact path='/people' element={<PeopleList currentUser={currentUser} peopleList={peopleList} />} />
                <Route exact path='/people/:id' element={<PeopleDetail currentUser={currentUser} />} />
                <Route exact path='people/new' element={<PeopleCreate handleCreate={handleCreate} />} />
                <Route exact path='/people/:id/edit-address' element={<PeopleEditAddress addressList={addressList} handleEditAddress={handleEditAddress} />} />
                <Route exact path='/people/:id/edit-name' element={<PeopleEditName peopleList={peopleList} handleEditName={handleEditName} />} />
                <Route exact path='/people/:id/edit-email' element={<PeopleEditEmail emailsList={emailsList} handleEditEmail={handleEditEmail} />} />
                <Route exact path='/people/:id/edit-phone' element={<PeopleEditPhone phonesList={phonesList} handleEditPhone={handleEditPhone} />} />
            </Routes>

        </div>
    )
}

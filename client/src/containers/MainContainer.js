import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { addPerson, editPerson, getAllPeople } from '../services/people';
import { addAddress, getAllAddresses } from '../services/addresses';
import { getAllEmails } from '../services/emails';
import { getAllPhones } from '../services/phones';
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

    const handleEdit = async (id, formData) => {
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

    // EMAILS:

    useEffect(() => {
        const fetchAllEmails = async () => {
            const allEmails = await getAllEmails()
            setEmailsList(allEmails)
        }
        fetchAllEmails()
    }, [])

    // PHONE NUMBERS:

    useEffect(() => {
        const fetchAllPhones = async () => {
            const phonesList = await getAllPhones()
            setPhonesList(phonesList)
        }
        fetchAllPhones()
    }, [])

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
                <Route exact path='/people/:id/edit-address' element={<PeopleEditAddress addressList={addressList} />} />
                <Route exact path='/people/:id/edit-name' element={<PeopleEditName peopleList={peopleList} handleEdit={handleEdit} />} />
                <Route exact path='/people/:id/edit-email' element={<PeopleEditEmail emailsList={emailsList} />} />
                <Route exact path='/people/:id/edit-phone' element={<PeopleEditPhone phonesList={phonesList} />} />
            </Routes>

        </div>
    )
}

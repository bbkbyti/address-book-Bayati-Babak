import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { addPerson, getAllPeople } from '../services/people';
import { addAddress, getAllAddresses } from '../services/addresses';
import { getAllEmails } from '../services/emails';
import { getAllPhones } from '../services/phones';
import PeopleList from '../screens/PeopleList';
import PeopleDetail from '../screens/PeopleDetail';
import PeopleCreate from '../screens/PeopleCreate';

export default function MainContainer() {
    const [peopleList, setPeopleList] = useState([]);
    const [addressList, setAddressList] = useState([]);
    const [emailsList, setEmailsList] = useState([]);
    const [phonesList, setPhonesList] = useState([]);

    const navigate = useNavigate();

    // PEOPLE: 

    useEffect(() => {
        const fetchPeople = async () => {
            const allPeople = await getAllPeople()
            setPeopleList(allPeople)
        }
        fetchPeople();
    }, [])

    useEffect(() => {
        const fetchAddresses = async () => {
            const addressList = await getAllAddresses()
            setAddressList(addressList)
        }
        fetchAddresses();
    }, [])


    const handleCreate = async (formData) => {
        const personData = await addPerson(formData);
        setPeopleList((prevState) => [...prevState, personData]);
        navigate('/people')
    }


    return (
        <div>
            <Routes>
                <Route exact path='/people' element={<PeopleList peopleList={peopleList} />} />
                <Route exact path='/people/:id' element={<PeopleDetail />} />
                <Route exact path='people/new' element={<PeopleCreate handleCreate={handleCreate} />} />
            </Routes>

        </div>
    )
}

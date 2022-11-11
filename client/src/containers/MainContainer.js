import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { addPerson, getAllPeople } from '../services/people';
import { addAddress, getAllAddresses } from '../services/addresses';
import { getAllEmails } from '../services/emails';
import { getAllPhones } from '../services/phones';
import PeopleList from '../screens/PeopleList';
import PeopleDetail from '../screens/PeopleDetail';
import PeopleCreate from '../screens/PeopleCreate';
import PeopleEdit from '../screens/PeopleEdit';

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

    useEffect(() => {
        const fetchAddresses = async () => {
            const addressList = await getAllAddresses()
            setAddressList(addressList)
        }
        fetchAddresses();
    }, [])

    useEffect(() => {
        const fetchAllEmails = async () => {
            const allEmails = await getAllEmails()
            setEmailsList(allEmails)
        }
        fetchAllEmails()
    }, [])

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
                <Route exact path='/people/:id/edit' element={<PeopleEdit addressList={addressList} peopleList={peopleList} emailsList={emailsList} phonesList={phonesList} />} />
            </Routes>

        </div>
    )
}

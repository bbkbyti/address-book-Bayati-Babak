import React, { useState, useEffect } from 'react'
import { getAllPeople } from '../services/people';
import { getAllAddresses } from '../services/addresses';
import { getAllEmails } from '../services/emails';
import { getAllPhones } from '../services/phones';

export default function MainContainer() {
    const [peopleList, setPeopleList] = useState([]);
    const [addressList, setAddressList] = useState([]);
    const [emailsList, setEmailsList] = useState([]);
    const [phonesList, setPhonesList] = useState([]);

    useEffect(() => {
        const fetchPeople = async () => {
            const allPeople = await getAllPeople()
            setPeopleList(allPeople)
        }
        fetchPeople();
    }, [])

    useEffect(() => {
        const fetchAddresses = async () => {
            const allAddresses = await getAllAddresses()
            setAddressList(allAddresses);
        }
        fetchAddresses();
    }, [])

    useEffect(() => {
        const fetchAllEmails = async () => {
            const allEmails = await getAllEmails()
            setEmailsList(allEmails);
        }
        fetchAllEmails()
    }, [])

    useEffect(() => {
        const fetchAllPhones = async () => {
            const allPhones = await getAllPhones()
            setPhonesList(allPhones);
        }
        fetchAllPhones();
    }, [])

    return (
        <div>
            <h2>Main Container</h2>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { getAllPeople } from '../services/people';
import { getAllAddresses } from '../services/addresses';

export default function MainContainer() {
    const [peopleList, setPeopleList] = useState([]);
    const [addressList, setAddressList] = useState([])

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


    return (
        <div>
            <h2>Main Container</h2>
        </div>
    )
}

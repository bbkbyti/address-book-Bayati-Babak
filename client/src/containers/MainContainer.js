import React, { useState, useEffect } from 'react'
import { getAllPeople } from '../services/people';

export default function MainContainer() {
    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        const fetchPeople = async () => {
            const allPeople = await getAllPeople()
            setPeopleList(allPeople)
        }
        fetchPeople();
    }, [])


    return (
        <div>
            <h2>Main Container</h2>
        </div>
    )
}

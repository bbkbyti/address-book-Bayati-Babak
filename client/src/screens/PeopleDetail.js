import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneAddress } from '../services/addresses';
import { getOnePerson } from '../services/people';

export default function PeopleDetail(props) {
    const [addData, setAddData] = useState([]);
    const [personName, setPersonName] = useState([])

    // const { } = props;
    const { id } = useParams();

    useEffect(() => {
        const fetchAddressItem = async () => {
            const addressData = await getOneAddress(id)
            setAddData(addressData)
        }
        fetchAddressItem();
    }, [id])

    useEffect(() => {
        const fetchPersonName = async () => {
            const pName = await getOnePerson(id)
            setPersonName(pName)
        }
        fetchPersonName()
    }, [id])

    return (
        <div>
            <h3>{personName.first_name} {personName.last_name}</h3>
            <p>Street: {addData.street}</p>
            <p>Town: {addData.town}</p>
            <p>Zip code: {addData.zip_code}</p>
            <p>State: {addData.state}</p>
            <p>Country: {addData.country}</p>
        </div>
    )
}

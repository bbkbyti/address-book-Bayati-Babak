import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getOneAddress } from '../services/addresses';
import { getOneEmail } from '../services/emails';
import { getOnePerson } from '../services/people';
import { getOnePhone } from '../services/phones';

export default function PeopleDetail(props) {
    const [addData, setAddData] = useState([]);
    const [personName, setPersonName] = useState([]);
    const [personEmail, setPersonEmail] = useState([]);
    const [personPhone, setPersonPhone] = useState([]);

    // const { } = props;
    const { id } = useParams();
    const { currentUser } = props;

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

    useEffect(() => {
        const fetchPersonEmail = async () => {
            const emailData = await getOneEmail(id)
            setPersonEmail(emailData)
        }
        fetchPersonEmail();
    }, [id])

    useEffect(() => {
        const fetchPhoneNumber = async () => {
            const phoneNum = await getOnePhone(id)
            setPersonPhone(phoneNum)
        }
        fetchPhoneNumber();
    }, [id])

    return (
        <div>
            <h3>{personName.first_name} {personName.last_name}</h3>
            <p>Street: {addData.street}</p>
            <p>Town: {addData.town}</p>
            <p>Zip code: {addData.zip_code}</p>
            <p>State: {addData.state}</p>
            <p>Country: {addData.country}</p>
            <p>Phone Number:{personPhone.phone_number}</p>
            <p>Email:{personEmail.email_address}</p>
            {currentUser?.id === addData.user_id && (
                <div>
                    <Link to={`/people/${id}/edit-name`}>
                        <button>Edit Name</button>
                    </Link>
                    <Link to={`/people/${id}/edit-address`}>
                        <button>Edit Address</button>
                    </Link>
                    <Link to={`/people/${id}/edit-email`}>
                        <button>Edit Email</button>
                    </Link>
                    <Link to={`/people/${id}/edit-phone`}>
                        <button>Edit Phone</button>
                    </Link>
                    <button>Delete</button>
                </div>
            )}

        </div>
    )
}

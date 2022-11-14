import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getOneAddress } from '../services/addresses';
import { getOneEmail } from '../services/emails';
import { getOnePerson } from '../services/people';
import { getOnePhone } from '../services/phones';

import { Button, Card } from 'react-bootstrap';


export default function PeopleDetail(props) {
    const [addData, setAddData] = useState([]);
    const [personName, setPersonName] = useState([]);
    const [personEmail, setPersonEmail] = useState([]);
    const [personPhone, setPersonPhone] = useState([]);

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
            console.log(emailData);
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
            <Card style={{ color: '#000' }}>
                <Card.Body>
                    <Card.Title>
                        {personName.first_name} {personName.last_name}
                    </Card.Title>
                    <Card.Text>
                        <p>Street: {addData.street}</p>
                        <p>Town: {addData.town}</p>
                        <p>Zip code: {addData.zip_code}</p>
                        <p>State: {addData.state}</p>
                        <p>Country: {addData.country}</p>
                        <p>Phone Number:{personPhone.phone_number}</p>

                        {personEmail.email_address ? (
                            <p>Email:{personEmail.email_address}</p>
                        ) : (
                            <div>
                                <p>Email: No emails!</p>
                                {currentUser?.id === addData.user_id && (
                                    <Link to='/people/new-email'>
                                        <p>Add Email!</p>
                                    </Link>
                                )}
                            </div>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
            {currentUser?.id === addData.user_id && (
                <div>
                    <Link to={`/people/${id}/edit-name`}>
                        <Button>Edit Name</Button>
                    </Link>
                    <Link to={`/people/${id}/edit-address`}>
                        <Button>Edit Address</Button>
                    </Link>
                    <Link to={`/people/${id}/edit-email`}>
                        <Button>Edit Email</Button>
                    </Link>
                    <Link to={`/people/${id}/edit-phone`}>
                        <Button>Edit Phone</Button>
                    </Link>
                </div>
            )}


        </div>
    )
}

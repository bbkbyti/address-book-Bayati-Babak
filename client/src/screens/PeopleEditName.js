import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function PeopleEditName(props) {
    const [nameData, setNameData] = useState({
        salutation: '',
        first_name: '',
        last_name: '',
    })

    const { peopleList, handleEdit } = props
    const { id } = useParams();

    useEffect(() => {
        const prefillFormDataName = () => {
            const nameItem = peopleList.find((person) => person.id === Number(id));
            setNameData(nameItem);
        }
        if (peopleList.length) {
            prefillFormDataName();
        }
    }, [id, peopleList])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNameData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div>
            <h3>PeopleEditName</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleEdit(id, nameData)
            }}>
                <label>
                    Salutation:
                    <input
                        type='text'
                        name='salutation'
                        value={nameData.salutation}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type='text'
                        name='first_name'
                        value={nameData.first_name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type='text'
                        name='last_name'
                        value={nameData.last_name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

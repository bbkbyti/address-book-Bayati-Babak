import React from 'react'
import { Link } from 'react-router-dom';

export default function PeopleList(props) {

    const { peopleList, currentUser } = props;

    return (
        <div>
            {peopleList.map((people) => (
                <div key={people.id}>
                    <Link to={`/people/${people.id}`}>
                        <h4>{people.first_name} {people.last_name}</h4>
                    </Link>
                </div>
            ))}
        </div>
    )
}

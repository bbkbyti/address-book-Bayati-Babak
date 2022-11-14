import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PeopleList(props) {

    const { peopleList, currentUser } = props;

    return (
        <Card>
            <Card.Body>
                {peopleList.map((people) => (
                    <div key={people.id}>
                        <Link to={`/people/${people.id}`}>
                            <Card.Text>{people.first_name} {people.last_name}</Card.Text>
                        </Link>
                    </div>
                ))}
            </Card.Body>
        </Card>
    )
}

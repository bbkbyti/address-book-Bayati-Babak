import React from 'react'

export default function PeopleList(props) {

    const { peopleList } = props;

    return (
        <div>
            {peopleList.map((people) => (
                <div key={people.id}>
                    <h4>{people.first_name} {people.last_name}</h4>
                </div>
            ))}
        </div>
    )
}

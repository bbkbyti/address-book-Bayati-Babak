import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
    const { currentUser } = props;
    return (
        <header>
            <Link to='/'>
                <h1>Address Book</h1>
            </Link>
            <Link to='/login'>Login/Register</Link>
            <h4>{currentUser.username}</h4>
            <hr />
            {props.children}
        </header>
    )
}

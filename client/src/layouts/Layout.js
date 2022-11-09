import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
    return (
        <header>
            <h1>Address Book</h1>
            <Link to='/login'>Login/Register</Link>
            <hr />
            {props.children}
        </header>
    )
}

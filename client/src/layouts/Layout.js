import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header>
            <Link to='/'>
                <h1>Address Book</h1>
            </Link>
            {currentUser ? (
                <div>
                    <Link to='/people'>
                        <h4>All People</h4>
                    </Link>
                    <h4>{currentUser.username}</h4>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            ) : (
                <Link to='/login'>Login/Register</Link>
            )}
            <hr />
            {props.children}
        </header>
    )
}

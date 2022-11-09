import React from 'react'

export default function Layout(props) {
    return (
        <header>
            <h1>Address Book</h1>
            {props.children}
        </header>
    )
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const { handleLogin } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                handleLogin(formData);
            }}
        >
            <h3>Login</h3>
            <Form.Group>
                <Form.Label>
                    Username:
                    <Form.Control
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Form.Label>
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>
                    Password:
                    <Form.Control
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Label>
            </Form.Group>
            <br />
            <Link to='/register'>Register</Link>
            <button>Submit</button>
        </Form>
    );
}
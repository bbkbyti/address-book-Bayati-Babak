
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import { loginUser, registerUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    navigate('/');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData)
    navigate('/');
  }
  console.log(currentUser);


  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Routes>
          <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route exact path='/register' element={<Register handleRegister={handleRegister} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

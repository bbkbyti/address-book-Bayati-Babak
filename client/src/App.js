
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';


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

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    navigate('/');
  }


  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Routes>
          <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route exact path='/register' element={<Register handleRegister={handleRegister} />} />
          <Route exact path='*' element={<MainContainer currentUser={currentUser} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

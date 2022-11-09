
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import { loginUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    navigate('/');
  }


  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

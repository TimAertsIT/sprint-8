import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login";


const LoginPage = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/starships');
    }
  }, [isAuthenticated, navigate]);
  return <Login setIsAuthenticated={setIsAuthenticated} />;
};
export default LoginPage;
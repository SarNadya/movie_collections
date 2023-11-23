import { Button } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ButtonLogout = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
    navigate('/');
  };
  return <Button onClick={handleLogout}>Выход</Button>;
};

export default ButtonLogout;

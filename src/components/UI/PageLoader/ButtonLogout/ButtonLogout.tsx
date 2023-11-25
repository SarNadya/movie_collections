import { Button } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';

const ButtonLogout = () => {
  const { resetUser } = useActions();
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
    resetUser();
    navigate('/');
  };
  return <Button onClick={handleLogout}>Выход</Button>;
};

export default ButtonLogout;

import { Button } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { localStorageUtil } from '../../../utils/localStorageUtil';

const ButtonLogout = () => {
  const user = useTypedSelector((state) => state.userReducer);
  const { resetUser } = useActions();
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuth(false);
    localStorageUtil.clearAuth();
    localStorageUtil.setUser(user.email, user);
    resetUser();
    navigate('/');
  };
  return <Button onClick={handleLogout}>Выход</Button>;
};

export default ButtonLogout;

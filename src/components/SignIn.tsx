import { useContext } from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useActions } from '../hooks/useActions';
import { localStorageUtil } from '../utils/localStorageUtil';
import { useInput } from '../hooks/useInput';

const { Text, Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

const SignIn = () => {
  const userEmail = useInput('');
  const userPassword = useInput('');

  const { setUser } = useActions();

  const { setIsAuth } = useContext(AuthContext);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!localStorageUtil.getUser(userEmail.value)) {
      alert('Пользователя с таким email не существует');
      form.resetFields();
    } else {
      const savedUser = localStorageUtil.getUser(userEmail.value);
      if (savedUser !== null && savedUser.password == userPassword.value) {
        setUser(savedUser);
        setIsAuth(true);
        localStorageUtil.setAuth();
        alert('Успешный вход');
        navigate('/');
      } else {
        alert('Неверный пароль');
        form.resetFields();
      }
    }
  };

  return (
    <Card size="small">
      <Title level={3} style={{ marginBottom: '40px' }}>
        Вход
      </Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={handleLogin}
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Email is not a valid!' },
          ]}
        >
          <Input value={userEmail.value} onChange={userEmail.onChange} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            {
              min: 6,
              max: 10,
              message: 'Must be between 6 and 10!',
            },
          ]}
        >
          <Input.Password
            value={userPassword.value}
            onChange={userPassword.onChange}
          />
        </Form.Item>

        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
      <Text italic>Нет аккаунта?</Text>
      <p>
        <NavLink to={'/register'}>Зарегистрироваться</NavLink>
      </p>
    </Card>
  );
};

export default SignIn;

import { useState, useContext } from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const { Text, Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [savedUser, setSavedUser] = useState({});
  const { setIsAuth } = useContext(AuthContext);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onChangeEmail = (value: string) => {
    setUser({
      ...user,
      email: value,
    });
  };

  const onChangePassword = (value: string) => {
    setUser({
      ...user,
      password: value,
    });
  };

  const handleLogin = () => {
    if (!localStorage.getItem(user.email)) {
      alert('Пользователя с таким email не существует');
      form.resetFields();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const initial: any = localStorage.getItem(user.email);
      const initialUser = JSON.parse(initial);
      if (initialUser.password == user.password) {
        setSavedUser(initialUser);
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
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
          <Input
            value={user.email}
            onChange={(e) => onChangeEmail(e.target.value)}
          />
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
            value={user.password}
            onChange={(e) => onChangePassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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

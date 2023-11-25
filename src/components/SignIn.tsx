import { useState, useContext } from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useActions } from '../hooks/useActions';

const { Text, Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

const SignIn = () => {
  const { setUser } = useActions();

  const [initialUser, setInitialUser] = useState({
    email: '',
    password: '',
  });

  const { setIsAuth } = useContext(AuthContext);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onChangeEmail = (value: string) => {
    setInitialUser({
      ...initialUser,
      email: value,
    });
  };

  const onChangePassword = (value: string) => {
    setInitialUser({
      ...initialUser,
      password: value,
    });
  };

  const handleLogin = () => {
    if (!localStorage.getItem(initialUser.email)) {
      alert('Пользователя с таким email не существует');
      form.resetFields();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const saved: any = localStorage.getItem(initialUser.email);
      const savedUser = JSON.parse(saved);
      if (savedUser.password == initialUser.password) {
        setUser(savedUser);
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
            value={initialUser.email}
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
            value={initialUser.password}
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

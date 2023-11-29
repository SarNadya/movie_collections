import { Button, Card, Typography, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { localStorageUtil } from '../utils/localStorageUtil';
import { useInput } from '../hooks/useInput';

const { Text, Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

const SignUp = () => {
  const userEmail = useInput('');
  const userPassword = useInput('');

  const [user, setUser] = useState({
    email: userEmail.value,
    password: userPassword.value,
    favorites: [],
    history: [],
  });

  useEffect(() => {
    setUser({
      ...user,
      email: userEmail.value,
      password: userPassword.value,
    });
  }, [userEmail.value, userPassword.value]);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (localStorageUtil.getUser(user.email)) {
      alert('Пользователь с таким email уже существует');
      form.resetFields();
    } else {
      localStorageUtil.setUser(user.email, user);
      alert('Вы успешно зарегистрированы. Теперь можете войти в аккаунт.');
      navigate('/login');
    }
  };

  return (
    <Card size="small">
      <Title level={3} style={{ marginBottom: '40px' }}>
        Регистрация
      </Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={handleRegister}
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
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
      <Text italic>Уже зарегистрированы?</Text>
      <p>
        <NavLink to={'/login'}>Войти в аккаунт</NavLink>
      </p>
    </Card>
  );
};

export default SignUp;

import { Button, Card, Typography, Form, Input } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const { Text, Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

const SignUp = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    favorites: [],
    history: [],
  });

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (localStorage.getItem(user.email)) {
      alert('Пользователь с таким email уже существует');
      form.resetFields();
    } else {
      localStorage.setItem(user.email, JSON.stringify(user));
      alert('Вы успешно зарегистрированы. Теперь можете войти в аккаунт.');
      navigate('/login');
    }
  };

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

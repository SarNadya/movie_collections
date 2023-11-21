import React from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { NavLink } from 'react-router-dom';

const { Text, Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
};

const SignIn = () => {
  return (
    <Card size="small">
      <Title level={3} style={{ marginBottom: '40px' }}>
        Вход
      </Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary">Войти</Button>
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

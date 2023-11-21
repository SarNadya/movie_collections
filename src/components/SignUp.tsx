import React from 'react';
import { Button, Card, Typography, Form, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
};

const SignUp = () => {
  return (
    <Card size="small">
      <Typography.Title level={3} style={{ marginBottom: '40px' }}>
        Регистрация
      </Typography.Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary">Зарегистрироваться</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignUp;

//
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

import { authOperations } from '../../redux/auth';

function ContactForm() {
  const dispatch = useDispatch();

  const onFormSubmit = values => {
    const email = values.email;
    const name = values.name;
    const password = values.password;

    dispatch(authOperations.registration({ name, email, password }));
  };

  return (
    <div className="wrapper">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFormSubmit}
        autoComplete="off"
      >
        <h3>Registration</h3>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your Name!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Registration
          </Button>
          Or <Link to="/login">logIn now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;

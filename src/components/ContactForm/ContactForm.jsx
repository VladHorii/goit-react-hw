import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { MobileOutlined, UserAddOutlined } from '@ant-design/icons';

import { addContact } from '../../redux/phoneBook/phoneBook-operations';
import { getContacts } from '../../redux/phoneBook/phoneBook-selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [form] = Form.useForm();

  const addToContacts = values => {
    const name = values.name;
    const number = values.number;

    const isExistsContact = contacts.find(
      contact => contact.name === name || contact.number === number,
    );

    if (isExistsContact) {
      return alert(`${name} or number ${number} is already in contacts.`);
    }

    dispatch(
      addContact({
        name,
        number,
      }),
    );
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="normal_login"
      className="contact-from"
      initialValues={{ remember: true }}
      onFinish={addToContacts}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your Name!' }]}
      >
        <Input
          prefix={<UserAddOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>

      <Form.Item
        name="number"
        rules={[{ required: true, message: 'Please input your Number!' }]}
      >
        <Input
          prefix={<MobileOutlined className="site-form-item-icon" />}
          placeholder="Number"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add contact
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ContactForm;

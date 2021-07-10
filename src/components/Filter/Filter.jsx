import { useDispatch } from 'react-redux';
import { Form, Input } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

function Filter() {
  const dispatch = useDispatch();

  const onChange = e => dispatch(phoneBookActions.changeFilter(e.target.value));

  return (
    <Form.Item label="Find contacts by name" className="form-group">
      <Input
        size="large"
        prefix={<FilterOutlined />}
        name="filter"
        placeholder="Find contacts by name"
        autoComplete="off"
        onChange={onChange}
      />
    </Form.Item>
  );
}

export default Filter;

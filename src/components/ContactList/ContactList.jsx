import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/phoneBook/phoneBook-operations';
import {
  getVisibleContacts,
  getError,
  getIsLoading,
} from '../../redux/phoneBook/phoneBook-selectors';
import { useEffect } from 'react';

import { Table, Space, Button } from 'antd';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}

      {contacts?.length > 0 ? (
        <Table
          dataSource={contacts}
          rowKey="id"
          pagination={{ position: ['none', 'none'] }}
        >
          <Table.Column key="name" title="Name" dataIndex="name" />
          <Table.Column key="Number" title="number" dataIndex="number" />
          <Table.Column
            key="Action"
            title="action"
            dataIndex="action"
            render={(_, record) => (
              <Space size="middle">
                <Button
                  type="button"
                  onClick={() => onDeleteContact(record.id)}
                >
                  Delete
                </Button>
              </Space>
            )}
          />
        </Table>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
}

export default ContactList;

import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import { authOperations, authSelectors } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import Container from '../Container';

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);

  function onLogOutClick() {
    dispatch(authOperations.logOut());
  }
  return (
    <header className="header">
      <Container>
        <div className="user-menu-wrapper">
          <img src={defaultAvatar} alt={userName} width="40" height="40" />
          <p className="user-menu-name">{userName}</p>
          <p className="user-menu-email">({userEmail})</p>
          <Button onClick={onLogOutClick} type="primary">
            LogOut
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default UserMenu;

/*
<div className="user-menu-wrapper">
      <img src={defaultAvatar} alt={userName} width="40" height="40" />
      <p>{userName}</p>
      <button onClick={onLogOutClick} type="button">
        LogOut
      </button>
    </div>*/

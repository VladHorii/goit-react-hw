import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  function onLogOutClick() {
    dispatch(authOperations.logOut());
  }
  return (
    <>
      <img src={defaultAvatar} alt={userName} width="40" height="40" />
      <p>{userName}</p>
      <button onClick={onLogOutClick} type="button">
        LogOut
      </button>
    </>
  );
}

export default UserMenu;

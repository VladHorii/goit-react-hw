import PropTypes from 'prop-types';

import s from './FriendsList.module.css';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.item}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

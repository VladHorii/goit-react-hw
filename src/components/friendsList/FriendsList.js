import PropTypes from 'prop-types';

import FriendsListItem from './FriendsListItem';

import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

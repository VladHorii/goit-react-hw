import { FC } from 'react';
import { Friend } from '../../types/types';
import { FriendsListItem } from './FriendsListItem';
import styles from './FriendsList.module.css';

interface Props {
  friends: Friend[];
}

export const FriendsList: FC<Props> = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
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
};

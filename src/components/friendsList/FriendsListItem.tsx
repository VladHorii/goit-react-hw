import { FC } from 'react';
import styles from './FriendsList.module.css';

interface Props {
  avatar: string;
  name: string;
  isOnline: boolean;
}

export const FriendsListItem: FC<Props> = ({ avatar, name, isOnline }) => {
  const onlineClassNames = `${styles.status} ${
    isOnline ? styles.online : styles.offline
  }`;
  return (
    <div className={styles.item}>
      <span className={onlineClassNames}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

import { FC } from 'react';
import styles from './Profile.module.css';

interface Props {
  name: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export const ProfileMarkup: FC<Props> = props => {
  const { name, tag, location, avatar, stats } = props;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width="80"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsList}>
          <div>
            <span className={styles.label}>Followers</span>
          </div>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.statsList}>
          <div>
            <span className={styles.label}>Views</span>
          </div>
          <span>{stats.views}</span>
        </li>
        <li className={styles.statsList}>
          <div>
            <span className={styles.label}>Likes</span>
          </div>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

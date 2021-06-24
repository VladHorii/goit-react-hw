import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function ProfileMarkup({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar}
          width="80"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsList}>
          <div>
            <span className={s.label}>Followers</span>
          </div>
          <span>{stats.followers}</span>
        </li>
        <li className={s.statsList}>
          <div>
            <span className={s.label}>Views</span>
          </div>
          <span>{stats.views}</span>
        </li>
        <li className={s.statsList}>
          <div>
            <span className={s.label}>Likes</span>
          </div>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

ProfileMarkup.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

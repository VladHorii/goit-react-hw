import user from '../../data/user.json';
import { ProfileMarkup } from './ProfileMarkup';

export const Profile = () => {
  return (
    <ProfileMarkup
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

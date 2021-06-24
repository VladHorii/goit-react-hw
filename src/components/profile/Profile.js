import user from './user.json';
import ProfileMarkup from './ProfileMarkup';

export default function Profile() {
  return (
    <ProfileMarkup
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}

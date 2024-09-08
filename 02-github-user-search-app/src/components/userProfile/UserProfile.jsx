import {
  UserInfo,
  UserBio,
  UserStats,
  UserLinks,
} from 'src/components/userProfile';

export default function UserProfile() {
  return (
    <div>
      <h1>UserProfile</h1>
      <UserInfo />
      <UserBio />
      <UserStats />
      <UserLinks />
    </div>
  );
}

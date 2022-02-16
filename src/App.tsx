import { Profile } from './components/Profile';
import { StaticticList } from './components/Statistics';
import { FriendsList } from './components/FriendsList';
import { TransactionHistory } from './components/TransactionHistory';

import transactionData from './data/transactions.json';
import statisticsData from './data/statistical-data.json';
import friendsData from './data/friends.json';

export const App = () => {
  return (
    <>
      <Profile />

      <StaticticList stats={statisticsData} />
      <StaticticList stats={statisticsData} title="Заголовок" />

      <FriendsList friends={friendsData} />

      <TransactionHistory transactions={transactionData} />
    </>
  );
};

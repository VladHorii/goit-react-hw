import Profile from './components/profile';

import Statistics from './components/statistics';
import statisticsData from './components/statistics/statistical-data.json';

import FriendsList from './components/friendsList';
import friendsData from './components/friendsList/friends.json';

import TransactionHistory from './components/transactionHistory';
import transactionData from './components/transactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile />

      <Statistics stats={statisticsData} />
      <Statistics stats={statisticsData} title="Заголовок" />

      <FriendsList friends={friendsData} />

      <TransactionHistory transactions={transactionData} />
    </div>
  );
}

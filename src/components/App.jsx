import ProfileCard from "./ProfileCard/ProfileCard";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileCard user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

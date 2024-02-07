import './App.css';
import Profile from "./components/Profile/Profile.jsx";
import userData from "./components/Profile/userData.json";

import FriendList from "./components/Friends/FriendList.jsx";
import friends from "./components/Friends/friends.json";

import TransactionHistory from "./components/Transaction/TransactionHistory.jsx"
import transactions from "./components/Transaction/transaction.json"

const App = () => {
  return (
    <>
      <Profile
        username={userData.name} 
        tag={userData.tag}
        location={userData.location}
        avatar={userData.image} 
        stats={userData.stats}
      />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;

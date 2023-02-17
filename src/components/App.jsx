import { User } from "./profile/profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FrinedsList/FriendsList";
import { TransactionSheet } from "./TransactionHistory/TransactionHistory";
import user from 'path/user.json';
import data from 'path/data.json';
import friends from 'path/friends.json';
import transactions from 'path/transactions.json';
import { GlobalStyles } from "./GlobalStyled.styled";
import { Layout } from "./Layout.styled";




export const App = () => {
  return (
    <Layout>
        <GlobalStyles/>
        <User user={user} />
        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends} />
        <TransactionSheet items={transactions} />
    </Layout>

  );
};


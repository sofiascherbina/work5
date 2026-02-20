import { useState } from 'react';
import Recipe from './components/Recipe';
import recipe from "./recipies.json"
import MovieList from './components2/MovieList';
import movies from './movies.json';
import user from './homework/profile/dataProf.json';
import Profile from './homework/profile/Profile';
import Statistics from './homework/statistic/Statistics';
import data from './homework/statistic/dataStat.json';
import FriendList from './homework/friends/FriendList';
import friends from './homework/friends/friends.json';
import TransactionHistory from './homework/transactions/TransactionHistory';
import transactions from './homework/transactions/transactions.json';
import './App.css'

function App() {

  return (
    <>
      {/* <Recipe recipe={recipe}/> */}
      {/* <MovieList movies={movies}/> */}
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      {/* <Statistics title="Upload stats" stats={data} />; */}
      {/* <FriendList friends={friends} /> */}
      <TransactionHistory items={transactions} />;
    </>
  )
}

export default App

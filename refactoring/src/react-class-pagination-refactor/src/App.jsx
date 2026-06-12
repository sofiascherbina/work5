import React, { Component } from "react";
import Header from "./components/Header.jsx";
import PostsPage from "./components/PostsPage.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="container">
          <PostsPage />
        </main>
      </div>
    );
  }
}

export default App;

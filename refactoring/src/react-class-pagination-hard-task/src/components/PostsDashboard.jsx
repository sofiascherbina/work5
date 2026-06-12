import React, { useState, useEffect} from "react";
import Filters from "./Filters";
import Pagination from "./Pagination";

export default function PostsDashboard(){
  const [state, setState] = useState({
    posts: [],
    users: [],
    searchQuery: "",
    selectedUserId: "all",
    sortType: "newest",
    currentPage: 1,
    perPage: 5,
    isLoading: false,
    error: null,
  });
  useEffect(()=>{
    const savedPerPage = localStorage.getItem("perPage");
    if(savedPerPage){
       setState(prev =>({
          ...prev,
          perPage: Number(savedPerPage)
      }));
    }
    loadData();
  },[]);

  useEffect(()=>{
    localStorage.setItem("perPage", state.perPage);
  },[state.perPage])

  const loadData = async () => {
    setState(prev =>({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      const [postsResponse, usersResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users"),
      ]);

      if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error("Failed to load data");
      }

      const posts = await postsResponse.json();
      const users = await usersResponse.json();

      setState(prev =>({
        ...prev,
        posts,
        users,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev=>({
        ...prev,
        error: error.message,
        isLoading: false,
      }));
    }
  };

  const handleSearchChange = (event) => {
    setState(prev=>({
      ...prev,
      searchQuery: event.target.value,
      currentPage: 1,
    }));
  };

  const handleUserChange = (event) => {
    setState(prev=>({
      ...prev,
      selectedUserId: event.target.value,
      currentPage: 1,
    }));
  };

  const handleSortChange = (event) => {
    setState(prev =>({
      ...prev,
      sortType: event.target.value,
      currentPage: 1,
    }));
  };

  const handlePerPageChange = (event) => {
    setState(prev =>({
      ...prev,
      perPage: Number(event.target.value),
      currentPage: 1,
    }));
  };

  const handlePageChange = (page) => {
    setState(prev =>({
      ...prev,
      currentPage: page,
    }))
  };

  const handleNextPage = () => {
    setState(prev => ({
      ...prev,
      currentPage: prev.currentPage + 1,
    }))
  };

  const handlePreviousPage = () => {
    setState(prev =>({
      ...prev,
      currentPage: prev.currentPage - 1,
    }))
  };

  const resetFilters = () => {
    setState(prev =>({
      ...prev,
      searchQuery: "",
      selectedUserId: "all",
      sortType: "newest",
      currentPage: 1,
      perPage: 5,
    }));
  };

  const getFilteredPosts = () => {

    let filteredPosts = [...state.posts];

    if (state.searchQuery.trim() !== "") {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }

    if (state.selectedUserId !== "all") {
      filteredPosts = filteredPosts.filter(
        (post) => post.userId === Number(state.selectedUserId)
      );
    }

    if (state.sortType === "newest") {
      filteredPosts.sort((a, b) => b.id - a.id);
    }

    if (state.sortType === "oldest") {
      filteredPosts.sort((a, b) => a.id - b.id);
    }

    if (state.sortType === "title-az") {
      filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (state.sortType === "title-za") {
      filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filteredPosts;
  };

  const getCurrentPosts = () => {
    const filteredPosts = getFilteredPosts();

    const lastIndex = state.currentPage * state.perPage;
    const firstIndex = lastIndex - state.perPage;

    return filteredPosts.slice(firstIndex, lastIndex);
  };

  const getTotalPages = () => {
    return Math.ceil(getFilteredPosts().length / state.perPage);
  };

  const getUserName = (userId) => {
    const user = state.users.find((user) => user.id === userId);

    return user ? user.name : "Unknown user";
  };
    const currentPosts = getCurrentPosts();
    const totalPages = getTotalPages();
    const filteredPostsCount = getFilteredPosts().length;

    return (
      <div className="dashboard">
        <h1>Posts Dashboard</h1>

        <Filters
          users={state.users}
          searchQuery={state.searchQuery}
          selectedUserId={state.selectedUserId}
          sortType={state.sortType}
          perPage={state.perPage}
          onSearchChange={handleSearchChange}
          onUserChange={handleUserChange}
          onSortChange={handleSortChange}
          onPerPageChange={handlePerPageChange}
          onResetFilters={resetFilters}
        />

        {state.isLoading && <p className="message">Loading...</p>}

        {state.error && <p className="error">{state.error}</p>}

        {!state.isLoading && !state.error && (
          <>
            <p className="counter">Found posts: {filteredPostsCount}</p>

            {currentPosts.length === 0 ? (
              <p className="message">No posts found</p>
            ) : (
              <ul className="posts">
                {currentPosts.map((post) => (
                  <li key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <small>Author: {getUserName(post.userId)}</small>
                  </li>
                ))}
              </ul>
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={state.currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
              />
            )}
          </>
        )}
      </div>
    );
  }


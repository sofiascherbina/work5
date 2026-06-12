import { useState, useEffect } from "react";
import { getPosts, getUsers } from "../services/postsApi.js";
import {
  filterPosts,
  getTotalPages,
  paginatePosts,
  sortPosts,
} from "../utils/postHelpers.js";
import FiltersPanel from "./FiltersPanel.jsx";
import Pagination from "./Pagination.jsx";
import PostList from "./PostList.jsx";
import StatsPanel from "./StatsPanel.jsx";
import StatusMessage from "./StatusMessage.jsx";


export default function PostsPage (){
  const [state, setState] = useState(
    {
      posts: [],
      users: [],
      searchQuery: "",
      selectedUserId: "all",
      sortType: "id-asc",
      currentPage: 1,
      perPage: 6,
      isLoading: false,
      error: null,
    }
  )
  useEffect(()=>{
    loadData();
  },[]);

  const loadData = async () => {
    setState(prev=>({ ...prev, isLoading: true, error: null }));

    try {
      const [posts, users] = await Promise.all([getPosts(), getUsers()]);

      setState(prev=>({
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
    setState(prev=>({
      ...prev,
      sortType: event.target.value,
      currentPage: 1,
    }));
  };

  const handlePerPageChange = (event) => {
    setState(prev=>({
      ...prev,
      perPage: Number(event.target.value),
      currentPage: 1,
    }));
  };

  const handlePageChange = (page) => {
    setState(prev=>({ ...prev, currentPage: page }));
  };

  const handleNextPage = () => {
    const preparedPosts = getPreparedPosts();
    const totalPages = getTotalPages(preparedPosts.length, state.perPage);

    setState((prev) => ({
      ...prev,
      currentPage: Math.min(prev.currentPage + 1, totalPages),
    }));
  };

  const handlePreviousPage = () => {
    setState((prev) => ({
      ...prev,
      currentPage: Math.max(prev.currentPage - 1, 1),
    }));
  };

  const handleResetFilters = () => {
    setState(prev=>({
      ...prev,
      searchQuery: "",
      selectedUserId: "all",
      sortType: "id-asc",
      currentPage: 1,
      perPage: 6,
    }));
  };

  const getPreparedPosts = () => {
    const filteredPosts = filterPosts(state.posts, state.searchQuery, state.selectedUserId);
    return sortPosts(filteredPosts, state.sortType);
  };

  const preparedPosts = getPreparedPosts();
  const currentPosts = paginatePosts(preparedPosts, state.currentPage, state.perPage);
  const totalPages = getTotalPages(preparedPosts.length, state.perPage);

    return (
      <section className="dashboard">
        <div className="dashboard__top">
          <div>
            <p className="eyebrow">React task</p>
            <h2>Pagination with filters</h2>
          </div>
          <button className="button button--ghost" onClick={loadData}>
            Reload data
          </button>
        </div>

        <StatsPanel
          totalPosts={state.posts.length}
          visiblePosts={preparedPosts.length}
          currentPage={state.currentPage}
          totalPages={totalPages}
        />

        <FiltersPanel
          users={state.users}
          searchQuery={state.searchQuery}
          selectedUserId={state.selectedUserId}
          sortType={state.sortType}
          perPage={state.perPage}
          onSearchChange={handleSearchChange}
          onUserChange={handleUserChange}
          onSortChange={handleSortChange}
          onPerPageChange={handlePerPageChange}
          onResetFilters={handleResetFilters}
        />

        {state.isLoading && <StatusMessage type="loading" text="Loading posts..." />}
        {state.error && <StatusMessage type="error" text={state.error} />}

        {!state.isLoading && !state.error && (
          <>
            <PostList posts={currentPosts} users={state.users} />

            {preparedPosts.length === 0 ? (
              <StatusMessage
                type="empty"
                text="No posts found. Try changing the filters."
              />
            ) : (
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
      </section>
    );
  }
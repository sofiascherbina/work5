export default function FiltersPanel({
    users,
      searchQuery,
      selectedUserId,
      sortType,
      perPage,
      onSearchChange,
      onUserChange,
      onSortChange,
      onPerPageChange,
      onResetFilters,}){
         return (
      <div className="filters">
        <label className="field">
          <span>Search</span>
          <input
            type="text"
            placeholder="Search by title or text..."
            value={searchQuery}
            onChange={onSearchChange}
          />
        </label>

        <label className="field">
          <span>User</span>
          <select value={selectedUserId} onChange={onUserChange}>
            <option value="all">All users</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Sort</span>
          <select value={sortType} onChange={onSortChange}>
            <option value="id-asc">Oldest first</option>
            <option value="id-desc">Newest first</option>
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
          </select>
        </label>

        <label className="field">
          <span>Per page</span>
          <select value={perPage} onChange={onPerPageChange}>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </label>

        <button className="button button--dark" onClick={onResetFilters}>
          Reset
        </button>
      </div>
    );
  }

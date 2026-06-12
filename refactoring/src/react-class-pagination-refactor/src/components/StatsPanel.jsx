export default function StatsPanel({totalPosts, visiblePosts, currentPage, totalPages}){
    return (
        <div className="stats">
          <div className="stat-card">
            <span>Total posts</span>
            <strong>{totalPosts}</strong>
          </div>
          <div className="stat-card">
            <span>After filters</span>
            <strong>{visiblePosts}</strong>
          </div>
          <div className="stat-card">
            <span>Current page</span>
            <strong>
              {currentPage} / {totalPages}
            </strong>
          </div>
        </div>
    );
}

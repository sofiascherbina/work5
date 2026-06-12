export default function Pagination({currentPage, totalPages, onPageChange, onNextPage, onPreviousPage}){
  const getPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };
   return (
      <nav className="pagination" aria-label="Pagination">
        <button
          className="pagination__button"
          onClick={onPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="pagination__numbers">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              className={
                currentPage === page
                  ? "pagination__number pagination__number--active"
                  : "pagination__number"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="pagination__button"
          onClick={onNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </nav>
    );
} 


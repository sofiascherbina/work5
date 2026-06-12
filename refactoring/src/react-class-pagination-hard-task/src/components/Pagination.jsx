export default function Pagination({
      currentPage,
      totalPages,
      onPageChange,
      onNextPage,
      onPreviousPage,
  }){

    const getPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };
    return (
      <div className="pagination">
        <button onClick={onPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}

        <button onClick={onNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  }



interface PaginationProps {
  pageNumbers: number[];
  currentPage: number;
  totalPages: number;
  handleClickedPage: (pageNumber: number) => void;
}

const Pagination = ({
  pageNumbers,
  currentPage,
  totalPages,
  handleClickedPage,
}: PaginationProps) => {
  return (
    <div className='flex justify-center'>
      <ol className='list-none flex space-x-2 py-2'>
        <li className='flex justify-center'>
          <button
            onClick={() => handleClickedPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? 'text-gray-400' : 'hover:text-customGreenDark'
            }`}
          >
            <span>Prev</span>
          </button>
        </li>
        {/* Map through the page numbers to create pagination buttons */}
        {pageNumbers.map((pageNumber, index) => {
          // Only show the first 2 pages, the last 2 pages, the current page, the page before it, and the page after it
          if (
            pageNumber < 3 ||
            pageNumber > pageNumbers.length - 2 ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <li key={pageNumber}>
                <button
                  onClick={() => handleClickedPage(pageNumber)}
                  className={`${
                    pageNumber === currentPage
                      ? 'bg-customGreen text-white px-2 py-1 rounded-lg'
                      : 'bg-white text-black px-2 py-1 rounded-lg'
                  }`}
                >
                  {pageNumber}
                </button>
              </li>
            );
          } else if (
            (index === 2 && currentPage - 1 > 3) ||
            (index === pageNumbers.length - 3 &&
              currentPage + 1 < pageNumbers.length - 2)
          ) {
            // Show "..." to indicate more pages
            return <li key={pageNumber}>...</li>;
          } else {
            return null;
          }
        })}
        <li className='flex justify-center'>
          <button
            onClick={() => handleClickedPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? 'text-gray-400'
                : 'hover:text-customGreenDark'
            }`}
          >
            <span>Next</span>
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
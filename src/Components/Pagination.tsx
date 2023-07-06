import { PaginationProps } from "../types";


function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps){
    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    return (
        <div className="flex items-center justify-center space-x-2 mt-5 mb-0">
            {/* <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-gray-500 bg-gray-200 rounded-lg cursor-pointer"
        >
          Previous
        </button> */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="join-item btn btn-primary"
            >
                «
            </button>
            
            {/* {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg cursor-pointer ${currentPage === index + 1
                            ? "text-white bg-blue-500"
                            : "text-gray-500 bg-gray-200"
                        }`}
                >
                    {index + 1}
                </button>
            ))} */}
            <div className="join-item btn btn-primary">Page {currentPage}</div>

            {/* <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-gray-500 bg-gray-200 rounded-lg cursor-pointer"
            >
                Next
            </button> */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="join-item btn btn-primary"
            >
                »
            </button>
        </div>
    );

    /* return (
        <div className="join flex gap-5">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 22</button>
            <button className="join-item btn">»</button>
        </div>
    ) */
};

export default Pagination;

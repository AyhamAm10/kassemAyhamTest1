import React from "react";
import leftArow from "../../assets/category/eva_arrow-ios-back-fill (1).svg"
import rightArow from "../../assets/category/eva_arrow-ios-back-fill.svg"
interface PaginationProps {
  totalPages: number | null;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageClick = (newPage: number) => {
    if(totalPages)
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {totalPages && (
        <>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            className="rounded-full p-2 bg-[#D9D9D9] text-2xl hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <img src={leftArow} className="w-4 h-4 rounded-full" />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages })
              .map((_, index) => index + 1)
              .filter((page) => {
                return window.innerWidth >= 640
                  ? page >= currentPage - 1 && page <= currentPage + 2
                  : page === currentPage || page === currentPage + 1;
              })
              .map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`rounded-full p-2 w-8 h-8 flex items-center justify-center 
                ${
                  currentPage === page
                    ? "bg-gradient-to-r from-red to-yalwe text-white"
                    : " font-semibold border border-[#D9D9D9] text-[#D9D9D9] bg-white"
                }`}
                >
                  {page}
                </button>
              ))}
          </div>

          <button
            onClick={() => handlePageClick(currentPage + 1)}
            className="rounded-full p-2 bg-[#D9D9D9] text-dark  disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            <img src={rightArow} className="w-4 h-4 rounded-full" />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;

import React from "react";

import { PaginateLeft, PaginateRight } from "../../utils/icons";

function MobilePagination({ currentPage, setCurrentPage, items }) {
  const totalPages = Math.ceil(items.length / 10);

  return (
    <div className="mt-10 flex justify-end gap-4">
      <span className="font-poppins text-[10px] font-medium text-[#64728C]">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <PaginateLeft />
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <PaginateRight />
      </button>
    </div>
  );
}

export default MobilePagination;

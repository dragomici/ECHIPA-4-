import React from "react";
import { Button } from "../../atoms/Button/Button";
import "./Pagination.css";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav className="pagination" aria-label="Pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Button
            className="pagination__button"
            disabled={currentPage === 1}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Prev
          </Button>
        </li>

        {pages.map((page) => (
          <li key={page} className="pagination__item">
            <Button
              className={`pagination__button ${currentPage === page ? "pagination__button--active" : ""}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </Button>
          </li>
        ))}

        <li className="pagination__item">
          <Button
            className="pagination__button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

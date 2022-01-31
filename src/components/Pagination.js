import React from "react";
import "../App.css";
export const Pagination = ({ paginate, postsPerPage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginationUl">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a onClick={() => paginate(pageNumber)} href="!#">
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

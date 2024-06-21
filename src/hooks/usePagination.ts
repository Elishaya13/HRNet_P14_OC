import { useState } from 'react';

/**
 * Custom hook to manage pagination for a data array
 *
 * @param initialUsersPerPage // number of users per page
 * @param users // users array
 * @returns // pagination object
 */
export const usePagination = <T>(initialUsersPerPage: number, users: T[]) => {
  /* currentPage: current page number, initally set to 1 */
  const [currentPage, setCurrentPage] = useState(1);
  /* usersPerPage: number of users per page */
  const [usersPerPage, setUsersPerPage] = useState(initialUsersPerPage);

  /* Calculate the starting and ending index of users on the current page */
  const lastUserIndexOnPage = currentPage * usersPerPage;
  const firstUserIndexOnPage = lastUserIndexOnPage - usersPerPage;

  /* Currents users */
  const currentUsers = users.slice(firstUserIndexOnPage, lastUserIndexOnPage);

  const totalPages = Math.ceil(users.length / usersPerPage);

  /* Function to handle the change of users per page */
  const handleUsersPerPageChange = (event: { target: { value: string } }) => {
    setUsersPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  /* Function to handle the click on a page number */
  const handleClickedPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  /* Array of page numbers */
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return {
    currentUsers,
    handleUsersPerPageChange,
    handleClickedPage,
    pageNumbers,
    currentPage,
    usersPerPage,
    firstUserIndexOnPage,
    lastUserIndexOnPage,
    totalUsers: users.length,
  };
};

import { useState } from 'react';

export function usePagination<T>(
  initialUsersPerPage: number,
  users: T[]
) {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(initialUsersPerPage);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleUsersPerPageChange = (event: { target: { value: string } }) => {
    setUsersPerPage(parseInt(event.target.value));
  };

  const handleClickedPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
    totalPages,
  };
}

import { useState } from 'react';

/* Hook personnalisé pour gérer la pagination pour un tableau de données
initialUsersPerPage: nombre d'utilisateurs par page
users: tableau d'utilisateurs
T: type de données des utilisateurs 
*/

export function usePagination<T>(
  initialUsersPerPage: number,
  users: T[]
) {
  /* currentPage: numéro de la page courante , initialisé a 1 */
  const [currentPage, setCurrentPage] = useState(1);
  /* usersPerPage: nombre d'utilisateurs par page */
  const [usersPerPage, setUsersPerPage] = useState(initialUsersPerPage);

  /* Calcul des index de début et de fin des utilisateurs actuels */
  const lastUserIndexOnPage = currentPage * usersPerPage;  
  const firstUserIndexOnPage = lastUserIndexOnPage - usersPerPage;

  /* Utilisateurs actuels */
  const currentUsers = users.slice(firstUserIndexOnPage, lastUserIndexOnPage);

  const totalPages = Math.ceil(users.length / usersPerPage);

  /* Fonction pour gérer le changement du nombre d'utilisateurs par page */
  const handleUsersPerPageChange = (event: { target: { value: string } }) => {
    setUsersPerPage(parseInt(event.target.value));
  };

  /* Fonction pour gérer le changement de page */
  const handleClickedPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  /* Tableau de numéros de page */
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

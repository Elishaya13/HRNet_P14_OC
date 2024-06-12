import { useCallback } from "react";
import { User } from "../interfaces/Interfaces";

/* Hook personnalisé pour trier les données 
columnKey: clé de la colonne à trier (ex : 'firstname' - a.firstname)
sortDirection: direction de tri (ascendant ou descendant)
users: tableau d'utilisateurs à trier
useCallback: hook pour mémoriser la fonction de tri
*/



/**
 * Custom hook to sort data
 * 
 * @param columnKey // column key to sort (ex: 'firstname' - a.firstname)
 * @param sortDirection // sort direction (ascendant or descendant)
 * @param users // users array to sort 
 *  
 * @returns // sorted users
 */
export const useSortFunction = () => {
  /* useCallback: hook to memorize the sort function */
  return useCallback((columnKey: keyof User, sortDirection: string, users: User[]) => {
    const sortedUsers = [...users].sort((a: User, b: User) => {
      return sortDirection === 'asc'
        ? a[columnKey].localeCompare(b[columnKey])
        : b[columnKey].localeCompare(a[columnKey]);
    });

    return sortedUsers;
  }, []);
};
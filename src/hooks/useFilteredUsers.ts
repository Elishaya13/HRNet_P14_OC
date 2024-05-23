import { useMemo } from "react";
import { User } from "../interfaces/Interfaces";


/**
 *  Custom hook to filter users
 * 
 * @param searchTerm  // search term
 * @param usersData  // users data array
 * @returns  // filtered users array
 */
export const useFilteredUsers = (searchTerm: string, usersData: User[]) => {
    return useMemo(() => {
      return usersData.filter(user => {
        return Object.values(user).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }, [searchTerm, usersData]);
}
import { User } from '../interfaces/Interfaces';

/**
 *  Custom hook to filter users based on search term
 *
 * @param searchTerm  // search term
 * @param usersData  // users data array
 * @returns  // filtered users array
 */
export const useFilteredUsers = (searchTerm: string, usersData: User[]) => {
  // Convert searchTerm to lowercase for case-insensitive search
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Use .filter() to iterate through usersData and filter based on searchTerm
  return usersData.filter((user) => {
    // Use .some() to check if any property value of the user object contains searchTerm
    return Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
};

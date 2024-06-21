import { User } from '../interfaces/Interfaces';

/**
 * Function sort data
 *
 * @param columnKey // column key to sort (ex: 'firstname' - a.firstname)
 * @param sortDirection // sort direction (ascendant or descendant)
 * @param users // users array to sort
 *
 * @returns // sorted users
 */
export const sortUserData = (
  columnKey: keyof User,
  sortDirection: string,
  users: User[]
) => {
  const sortedUsers = [...users].sort((a: User, b: User) => {
    return sortDirection === 'asc'
      ? a[columnKey].localeCompare(b[columnKey])
      : b[columnKey].localeCompare(a[columnKey]);
  });

  return sortedUsers;
};

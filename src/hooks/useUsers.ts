import { useContext } from 'react';
import { UsersContext, UsersContextValue } from '../context/UserContext';

/**
 * Hook to use the UsersContext
 *
 * @returns {UsersContextValue} The context value
 */
export const useUsers = (): UsersContextValue => {
  return useContext(UsersContext);
};

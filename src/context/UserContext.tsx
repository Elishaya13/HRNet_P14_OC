import { createContext, useState } from 'react';
import { User } from '../interfaces/Interfaces';
import { mockUsers } from '../data/mockUsers';

export type UsersContextValue = {
  users: User[];
  addUser: (user: User) => void;
};

export const UsersContext = createContext<UsersContextValue>({
  users: [],
  addUser: () => {},
});

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(mockUsers);

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}

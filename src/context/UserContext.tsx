import { createContext, useState } from 'react';
import { UserValues } from '../interfaces/Interfaces';
import { mockUsers } from '../data/mockUsers';



type UsersContextValue = {
  users: UserValues[];
  addUser: (user: UserValues) => void;
 
}

export const UsersContext = createContext<UsersContextValue>({
  users: [],
  addUser: () => {},
});



export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<UserValues[]>(mockUsers);  
 
  const addUser = (user: UserValues) => {
    setUsers(prevUsers => [...prevUsers, user]);
  };
  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}


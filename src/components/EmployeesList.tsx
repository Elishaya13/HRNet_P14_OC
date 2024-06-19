import { useState } from 'react';
import { Link } from 'react-router-dom';

import TableHeader from './table/TableHeader.tsx';
import Pagination from './table/Pagination.tsx';
import TableBody from './table/TableBody.tsx';
import InputSearch from './inputs/InputSearch.tsx';

import { useFilteredUsers } from '../hooks/useFilteredUsers.ts';
import { usePagination } from '../hooks/usePagination.ts';
import { useSortFunction } from '../hooks/useSortFunction.ts';
import { useUsers } from '../hooks/useUsers.ts';

import { User } from '../interfaces/Interfaces.ts';


interface ColumnKeys {
  [key: string]: keyof User;
}

const columnKeys: ColumnKeys = {
  'First Name': 'firstname',
  'Last Name': 'lastname',
  'Start Date': 'startdate',
  Department: 'department',
  'Date of Birth': 'dob',
  Street: 'street',
  City: 'city',
  State: 'country',
  'Zip Code': 'zip',
};

const columnHeaders = [
  'First Name',
  'Last Name',
  'Start Date',
  'Department',
  'Date of Birth',
  'Street',
  'City',
  'State',
  'Zip Code',
];

const EmployeesList = () => {
  const { users } = useUsers();
  const [usersData, setUsersData] = useState(users);
  const [sortDir, setSortDir] = useState('desc');
  const [columnSorted, setColumnSorted] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  /* Function to filter the data */
  const filteredUsers = useFilteredUsers(searchTerm, usersData);

  /* Function to sort the data */
  const sortFunction = useSortFunction();

  /* Pagination */
  const {
    currentUsers,
    handleUsersPerPageChange,
    handleClickedPage,
    pageNumbers,
    currentPage,
    usersPerPage,
    totalPages,
  } = usePagination<User>(5, filteredUsers);

  /* Function to handle the search */
  type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
  const handleSearch = (e: InputChangeEvent) => {
    setSearchTerm(e.target.value);
  };

  /* Function to handle the click on the table header */
  const handleColumnSort = (columnTitle: string) => {
    const columnKey = columnKeys[columnTitle];
    setColumnSorted(columnTitle);
    const newSort = sortDir === 'asc' ? 'desc' : 'asc';
    setSortDir(newSort);
    const sortedUsers = sortFunction(columnKey, newSort, filteredUsers);
    setUsersData(sortedUsers);
  };


  return (
    <div className='p-2'>     
      {/* Show entries */}
      <div className='flex flex-row justify-between mb-2'>
        <div className='flex flex-row items-center'>
          <p> Show </p>
          <select
            id='usersPerPage'
            value={usersPerPage}
            onChange={handleUsersPerPageChange}
            className='m-1 text-sm py-1 focus:ring-customGreenDark focus:border-customGreenDark'
          >
            <option value='1'>1</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
          </select>
          <p> entries</p>
        </div>
        {/* Input Search */}
        <div className='flex flex-row items-center'>
          <InputSearch handleSearch={handleSearch} />
        </div>
      </div>
      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <TableHeader
            tableHeaders={columnHeaders}
            handleClick={handleColumnSort}
            columnSorted={columnSorted}
            sortDirection={sortDir}
          />
          <TableBody currentUsers={currentUsers} />
        </table>
      </div>
      {/* Pagination */}
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        totalPages={totalPages}
        handleClickedPage={handleClickedPage}
      />
      {/* Home button */}
      <div className='flex justify-center'>
        <Link to='/'>
          <button className='bg-customGreen rounded-lg text-white p-2 mt-4'>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeesList;

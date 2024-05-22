import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../context/UserContext';
import { usePagination } from '../utils/usePagination';
import { User } from '../interfaces/Interfaces';
import TableHeader from '../components/table/TableHeader';
import Pagination from '../components/table/Pagination';
import TableBody from '../components/table/TableBody';

const EmployeesList = () => {
  const { users } = useContext(UsersContext);
  const [usersData, setUsersData] = useState(users);
  const [sortDir, setSortDir] = useState('desc');
  const [columnSorted, setColumnSorted] = useState<string>('');

  const {
    currentUsers,
    handleUsersPerPageChange,
    handleClickedPage,
    pageNumbers,
    currentPage,
    usersPerPage,
    totalPages,
  } = usePagination<User>(5, users);

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

  /* Function to sort the data */
  const sortFunction = (columnKey: keyof User, sortDirection: string) => {
    if (sortDirection === 'asc') {
      usersData.sort((a: User, b: User) => {
        return a[columnKey].localeCompare(b[columnKey]);
      });
      setUsersData(usersData);
    } else if (sortDirection === 'desc') {
      usersData.sort((a: User, b: User) => {
        return b[columnKey].localeCompare(a[columnKey]);
      });
      setUsersData(usersData);
    }
  };

  /* Function to handle the click on the table header */
  const handleClick = (columnTitle: string) => {
    const columnKey = columnKeys[columnTitle];
    setColumnSorted(columnTitle);
    const newSort = sortDir === 'asc' ? 'desc' : 'asc';
    setSortDir(newSort);
    sortFunction(columnKey, newSort);
  };

  const thead = [
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

  return (
    <div className='p-5'>
      <div className='flex flex-col items-center'>
        <h1 className='text-black font-bold m-2'>Current Employees</h1>
      </div>
      {/* Show entries */}
      <div className='flex flex-row items-center'>
        <p> Show </p>
        <select
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
      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <TableHeader
            thead={thead}
            handleClick={handleClick}
            columnSorted={columnSorted}
            sortDirection={sortDir}
          />
          <TableBody currentUsers={currentUsers} />        
        </table>
      </div>
      {/* pagination */}
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

import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../context/UserContext';
import { usePagination } from '../utils/usePagination';
import { UserValues } from '../interfaces/Interfaces';

const EmployeesList = () => {
  const { users } = useContext(UsersContext);

  const {
    currentUsers,
    handleUsersPerPageChange,
    handleClickedPage,
    pageNumbers,
    currentPage,
    usersPerPage,
    totalPages,

  } = usePagination<UserValues>(5, users);  


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
        <select value={usersPerPage} onChange={handleUsersPerPageChange} className='m-1 text-sm py-1 focus:ring-customGreenDark focus:border-customGreenDark'>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
        <p> entries</p>
      </div>
      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <thead className='ltr:text-left rtl:text-right'>
            <tr>
              {thead.map((head, index) => (
                <th
                  key={index}
                  className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {currentUsers.map((user, index) => (
              <tr key={index} className='odd:bg-gray-50'>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.firstname}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.lastname}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.startdate}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.department}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.dob}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.street}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.city}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.country}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {user.zip}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>   
      {/* pagination */}
      <div className='flex justify-center'>
        <ol className='list-none flex space-x-2'>
          <li>
            <button
              onClick={() => handleClickedPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span>Prev</span>
            </button>
          </li>
          {/* Map sur le tableau de numéros de page pour créer les boutons de pagination */}
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button onClick={() => handleClickedPage(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleClickedPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span>Next</span>
            </button>
          </li>
        </ol>
      </div>
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

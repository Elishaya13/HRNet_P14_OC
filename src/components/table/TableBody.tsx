import { User } from '../../interfaces/Interfaces';

interface TableBodyProps {
  currentUsers: User[];
}

/**
 *  Table content component
 *  @param currentUsers  // current users array
 *  @returns  // table body content
 */
const TableBody = ({ currentUsers }: TableBodyProps) => {
  return (
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
            {new Intl.DateTimeFormat('default').format(
              new Date(user.startdate)
            )}
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
            {user.department}
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
            {new Intl.DateTimeFormat('default').format(new Date(user.dob))}
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
            {user.street}
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
            {user.city}
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
            {user.state}
          </td>
          <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
            {user.zip}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

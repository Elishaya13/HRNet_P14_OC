import { Link } from 'react-router-dom';

const EmployeesList = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-white'>Current Employees</h1>
      </div>
      <div className='flex justify-center'>
        <Link to='/'>
          <button className='bg-white rounded-lg'>Home</button>
        </Link>
      </div>
    </>
  );
};

export default EmployeesList;
